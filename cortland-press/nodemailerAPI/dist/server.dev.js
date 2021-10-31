"use strict";

var express = require("express");

var nodemailer = require("nodemailer");

var app = express();

var cors = require("cors");

require("dotenv").config();

app.use(express.json());
app.use(cors());
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAUTH2",
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN
  }
});
transporter.verify(function (err, success) {
  err ? console.log(err) : console.log("=== Server is ready to take messages: ".concat(success, " ==="));
});
app.post("/send", function (req, res) {
  var mailOptions = {
    from: "".concat(req.body.values.email),
    to: process.env.EMAIL,
    subject: "Message From: ".concat(req.body.values.email),
    text: "".concat(req.body.values.message)
  };
  transporter.sendMail(mailOptions, function (err, data) {
    console.log(data);

    if (err) {
      res.json({
        status: "fail"
      });
      console.log("Error: " + err);
    } else {
      console.log("Email sent successfully");
      res.json({
        status: "success"
      });
    }
  });
});
var port = 3001;
app.listen(port, function () {
  console.log("Server is running on port: ".concat(port));
});