const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());
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
		from: `${req.body.values.email}`,
		to: process.env.EMAIL,
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

const port = 3001;
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
