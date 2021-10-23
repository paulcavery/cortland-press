import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Owner from "../assets/desktop/Owner Profile Image.png";
import { PoppinsFont, PoppinsFontWeight, below } from "../utilities";

const About = () => {
	return (
		<Container fluid id="about">
			<StyledAboutHead>About Us</StyledAboutHead>
			<StyledRow>
				<Col md={4}>
					<StyledImg src={Owner} />
				</Col>
				<StyledColumn md={8}>
					<p>
						We are an offset & digital printing center located at 87 Main Street
						in Cortland, New York.
					</p>
					<p>
						Founded in 1957, Cortland Press & Carbon Copies has been known for
						fine quality offset printing for over 60 years. We have the
						equipment and expertise to handle all of your print jobs – large or
						small.
					</p>
					<p>
						Let us partner with you to find the right printing solutions for
						your business, because we’re in business to help you do business
						better everyday.
					</p>
				</StyledColumn>
			</StyledRow>
			<StyledLocation id="location">
				<h4>Location & Hours of Operation</h4>
				<br />
				<p>
					We are conveniently located at 87 Main Street in Cortland, New York.
				</p>
				<br />
				<p>
					Open Monday through Friday 9AM to 4PM <br /> CLOSED Saturday and
					Sunday
				</p>
			</StyledLocation>
		</Container>
	);
};
const StyledImg = styled.img`
	height: 325px;
	width: 325px;
	border-radius: 100%;
	${below.med`
            height: 200px;
            width: 200px;
            margin-left: 1rem;
        `}
`;
const StyledColumn = styled(Col)`
	font: ${PoppinsFontWeight.Regular} 1.75rem ${PoppinsFont};
	color: #333;
	${below.med`
            font-size: 1rem;
            margin-top: 2rem;
            text-align: center;
        `}
`;
const StyledAboutHead = styled.h3`
	font: ${PoppinsFontWeight.Bold} 2rem ${PoppinsFont};
	text-align: center;
	margin: 3rem 0;
	${below.med`
            font-size: 1.25rem;
        `}
`;
const StyledRow = styled(Row)`
	margin: 1rem 15%;
`;
const StyledLocation = styled(Row)`
	height: 20rem;
	margin: 10rem 15% 3rem 15%;
	h4 {
		font: ${PoppinsFontWeight.Bold} 2rem ${PoppinsFont};
		width: 100%;
		text-align: center;
		${below.med`
            font-size: 1.2rem;
        `}
	}
	p {
		font: ${PoppinsFontWeight.Regular} 1.75rem ${PoppinsFont};
		width: 100%;
		text-align: center;
		${below.med`
            font-size: 1rem;
        `}
	}
`;
export default About;
