const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
require("dotenv").config();

let transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		type: "OAUTH2",
		user: process.env.EMAIL,
		pass: process.env.PASSWORD,
		clientId: process.env.OAUTH_CLIENTID,
		clientSecret: process.env.OAUTH_CLIENT_SECRET,
		refreshToken: process.env.OAUTH_REFRESH_TOKEN,
	},
});

transporter.verify((err, success) => {
	err
		? console.log(err)
		: console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", (req, res) => {
	let mailOptions = {
		from: "test@gmail.com",
		to: process.env.EMAIL,
		subject: "Nodemailer API",
		text: "Hi from your nodemailer API",
	};
	transporter.sendMail(mailOptions, (err, data) => {
		if (err) {
			console.log("Error: " + err);
		} else {
			console.log("Email sent successfully");
			res.json({ status: "Email Sent" });
		}
	});
});

const port = 3001;
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
