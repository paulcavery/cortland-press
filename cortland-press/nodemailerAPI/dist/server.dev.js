"use strict";

var express = require("express");

var nodemailer = require("nodemailer");

var app = express();

require("dotenv").config();

var port = 3001;
app.listen(port, function () {
  console.log("Server is running on port: ".concat(port));
});