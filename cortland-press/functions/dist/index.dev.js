"use strict";

var functions = require("firebase-functions");

var express = require("express");

var app = express();

var cors = require("cors");

var admin = require("firebase-admin");

var nodemailer = require("nodemailer");

admin.initializeApp();
app.use(express.json());
app.use(cors({
  origin: true
}));
var _functions$config$con = functions.config().config,
    username = _functions$config$con.username,
    password = _functions$config$con.password,
    refreshtoken = _functions$config$con.refreshtoken,
    clientid = _functions$config$con.clientid,
    clientsecret = _functions$config$con.clientsecret;
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAUTH2",
    user: username,
    pass: password,
    clientId: clientid,
    clientSecret: clientsecret,
    refreshToken: refreshtoken
  }
});
transporter.verify(function (err, success) {
  err ? console.log(err) : console.log("=== Server is ready to take messages: ".concat(success, " ==="));
});
app.post("/send", function (req, res) {
  var mailOptions = {
    from: "".concat(req.body.values.email),
    to: username,
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
exports.app = functions.https.onRequest(app); // // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });