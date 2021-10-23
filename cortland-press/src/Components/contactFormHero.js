import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import ContactForm from "./contactForm";
import FormHeroImg from "../assets/desktop/christina-rumpf-XWDMmk-yW7Q-unsplash.png";
import { PoppinsFont, PoppinsFontWeight } from "../utilities";

const ContactFormHero = () => {
	return (
		<StyledHeroContainer id="contact" fluid>
			<Row>
				<StyledFormCol md={{ span: 6, offset: 3 }}>
					<StyledFormHead>
						Have a project? Get started with us today!
					</StyledFormHead>
					<ContactForm />
				</StyledFormCol>
			</Row>
		</StyledHeroContainer>
	);
};

const StyledHeroContainer = styled(Container)`
	background: url(${FormHeroImg}) no-repeat center;
	background-size: 80%;
	height: 800px;
`;
const StyledFormCol = styled(Col)`
	padding-top: 3rem;
	padding-bottom: 3rem;
	margin-top: 4rem;
	background-color: #fff;
`;
const StyledFormHead = styled.h5`
	font: ${PoppinsFontWeight.Bold} 28px ${PoppinsFont};
	color: #333;
	margin: 0 auto 3rem auto;
	text-align: center;
`;

export default ContactFormHero;
