import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { PoppinsFont, PoppinsFontWeight, below } from "../utilities";

const phoneRegex =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const ContactForm = () => {
	const schema = Yup.object().shape({
		name: Yup.string()
			.min(2, "Too Short!")
			.max(50, "Too Long!")
			.required("Required"),
		email: Yup.string().email("Invalid Email").required("Required"),
		phone: Yup.string().matches(phoneRegex, "Please Enter Valid Phone Number"),
		message: Yup.string().required("Required"),
	});
	return (
		<Formik
			validationSchema={schema}
			onSubmit={async (values, { resetForm }) => {
				resetForm();
				await fetch(
					"https://cortland-press-r04ucl6rw-paulcavery.vercel.app/send",
					{
						method: "POST",
						headers: {
							"Content-type": "application/json",
						},
						body: JSON.stringify({ values }),
					}
				)
					.then((res) => res.json())
					.then(async (res) => {
						const resData = await res;
						console.log(resData);
						if (resData.status === "success") {
							alert("Message Sent");
						} else if (resData.status === "fail") {
							alert("Message failed to send");
						}
					});
			}}
			initialValues={{
				name: "",
				email: "",
				phone: "",
				message: "",
			}}
		>
			{({
				handleSubmit,
				handleChange,
				values,
				touched,
				handleBlur,
				errors,
			}) => (
				<StyledForm noValidate onSubmit={handleSubmit}>
					<Row mb={2}>
						<Form.Group
							as={Col}
							className="mb-5"
							controlId="formGridName"
							md={{ span: 8, offset: 2 }}
						>
							<Form.Label md={12}>First & Last Name</Form.Label>
							<Form.Control
								md={12}
								placeholder="Enter Name Here"
								name="name"
								type="text"
								value={values.name}
								onChange={handleChange}
								onBlur={handleBlur}
								isInvalid={!!errors.name}
							/>
							<Form.Control.Feedback type="invalid" tooltip>
								{errors.name}
							</Form.Control.Feedback>
						</Form.Group>
					</Row>
					<Row mb={2}>
						<Form.Group
							as={Col}
							className="mb-5"
							controlId="formGridEmail"
							md={{ span: 4, offset: 2 }}
						>
							<Form.Label md={12}>Email</Form.Label>
							<Form.Control
								md={12}
								name="email"
								placeholder="Enter Email"
								type="email"
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
								isInvalid={!!errors.email}
							/>
							<Form.Control.Feedback type="invalid" tooltip>
								{errors.email}
							</Form.Control.Feedback>
						</Form.Group>
						<Form.Group
							as={Col}
							className="mb-5"
							controlId="formGridPhone"
							md={{ span: 4 }}
						>
							<Form.Label md={12}>Phone Number</Form.Label>
							<Form.Control
								md={12}
								name="phone"
								placeholder="Enter Phone Number"
								type="tel"
								value={values.phone}
								onChange={handleChange}
								onBlur={handleBlur}
								isInvalid={!!errors.phone}
							/>
							<Form.Control.Feedback type="invalid" tooltip>
								{errors.phone}
							</Form.Control.Feedback>
						</Form.Group>
					</Row>
					<Row mb={2}>
						<Form.Group
							as={Col}
							controlId="formGridMessage"
							md={{ span: 8, offset: 2 }}
						>
							<Form.Label md={12}>Message</Form.Label>
							<Form.Control
								md={12}
								as="textarea"
								style={{ height: "150px" }}
								name="message"
								placeholder="Enter Message"
								type="text"
								value={values.message}
								onChange={handleChange}
								onBlur={handleBlur}
								isInvalid={!!errors.message}
							/>
						</Form.Group>
					</Row>
					<Row>
						<Col md="4" />
						<StyledButton variant="secondary" type="submit" size="lg">
							Submit
						</StyledButton>
					</Row>
				</StyledForm>
			)}
		</Formik>
	);
};
const StyledForm = styled(Form)`
	color: #333;
	font: ${PoppinsFontWeight.Medium} 17px ${PoppinsFont};
`;
const StyledButton = styled(Button)`
	width: 20rem;
	letter-spacing: 0.25rem;
	margin-top: 2rem;
	background-color: #333;
	:hover {
		background-color: #6c757d;
	}
	${below.med`
		margin: 2rem auto;
	`}
`;
export default ContactForm;
