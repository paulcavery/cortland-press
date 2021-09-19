"use strict";

var express = require("express");

var nodemailer = require("nodemailer");

var app = express();

require("dotenv").config();

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
    from: "test@gmail.com",
    to: process.env.EMAIL,
    subject: "Nodemailer API",
    text: "Hi from your nodemailer API"
  };
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error: " + err);
    } else {
      console.log("Email sent successfully");
      res.json({
        status: "Email Sent"
      });
    }
  });
});
var port = 3001;
app.listen(port, function () {
  console.log("Server is running on port: ".concat(port));
});