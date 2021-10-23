import React from "react";
import HeroCover from "../assets/desktop/bank-phrom-Tzm3Oyu_6sk-unsplash.jpg";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import { PoppinsFontWeight, PoppinsFont, below } from "../utilities";
import Container from "react-bootstrap/Container";

const Hero = () => {
	return (
		<Container fluid>
			<StyledHero xs={12}>
				<StyledHeroTitle>
					We're in business to help you do business.
				</StyledHeroTitle>
				<StyledHeroText>
					We have the equipment and the expertise to handle all of your print
					jobs
				</StyledHeroText>
			</StyledHero>
		</Container>
	);
};

const StyledHero = styled(Card)`
	height: 446px;
	background: url(${HeroCover}) no-repeat center;
	background-size: cover;
	margin: 3rem auto;
	width: 80%;
`;
const StyledHeroTitle = styled(Card.Title)`
	font: ${PoppinsFontWeight.SemiBold} 55px ${PoppinsFont};
	color: #fff;
	margin: auto;
	margin-bottom: 0.5rem;
	${below.large`
		font-size: 38px;
	`}
	${below.med`
		text-align: center;
		width: 75%;
		font-size: 26px;
	`}
`;
const StyledHeroText = styled(Card.Text)`
	font: ${PoppinsFontWeight.SemiBold} 28px ${PoppinsFont};
	color: #fff;
	margin: auto;
	margin-top: 0;
	padding-bottom: 8rem;
	${below.large`
		font-size: 18px;
	`}
	${below.med`
		text-align: center;
		width: 75%;
		font-size: 20px;
	`}
`;
export default Hero;
