const functions = require("firebase-functions");
const express = require("express");
const app = express();
const cors = require("cors");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

app.use(express.json());
app.use(cors({ origin: true }));

let { username, password, refreshtoken, clientid, clientsecret } =
	functions.config().config;

let transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		type: "OAUTH2",
		user: username,
		pass: password,
		clientId: clientid,
		clientSecret: clientsecret,
		refreshToken: refreshtoken,
	},
});

transporter.verify((err, success) => {
	err
		? console.log(err)
		: console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", (req, res) => {
	let mailOptions = {
		from: `${req.body.values.email}`,
		to: username,
		subject: `Message From: ${req.body.values.email}`,
		text: `${req.body.values.message}`,
	};
	transporter.sendMail(mailOptions, (err, data) => {
		console.log(data);
		if (err) {
			res.json({
				status: "fail",
			});
			console.log("Error: " + err);
		} else {
			console.log("Email sent successfully");
			res.json({ status: "success" });
		}
	});
});
exports.app = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
