import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";

const schema = Yup.object().shape({
	Name: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	email: Yup.string().email("Invalid Email").required("Required"),
	phone: Yup.string()
		.min(10, "Please Provide Area Code")
		.max(11, "Sorry, Not A Phone Number"),
});

export const ContactForm = () => {
	return (
		<>
			<Formik
				validationSchema={schema}
				onSubmit={console.log}
				initialValues={{
					Name: "",
					Email: "",
					Phone: "",
				}}
			>
				{({ handleSubmit, handleChange, values, touched, isValid, errors }) => (
					<Form onSubmit={handleSubmit}>
						<Row mb={3}>
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
									type="text"
									value={values.Name}
									onChange={handleChange}
									isValid={touched.Name && !errors.Name}
								></Form.Control>
							</Form.Group>
						</Row>
					</Form>
				)}
			</Formik>
		</>
	);
};
