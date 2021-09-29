import React from "react";
import HeroCover from "../assets/desktop/bank-phrom-Tzm3Oyu_6sk-unsplash.png";
import Card from "react-bootstrap/Card";
import styled from "styled-components";
import { PoppinsFontWeight, PoppinsFont } from "../utilities";

const Hero = () => {
	return (
		<StyledHero className="bg-dark text-white">
			<StyledHeroTitle>
				We're in business to help you do business.
			</StyledHeroTitle>
			<StyledHeroText>
				We have the equipment and the expertise to handle all of your print jobs
			</StyledHeroText>
		</StyledHero>
	);
};

const StyledHero = styled(Card)`
	height: 446px;
	background: url(${HeroCover}) no-repeat;
	background-size: cover;
	margin-bottom: 3rem;
`;
const StyledHeroTitle = styled(Card.Title)`
	font: ${PoppinsFontWeight.SemiBold} 55px ${PoppinsFont};
	margin: auto;
	margin-bottom: 0.5rem;
`;
const StyledHeroText = styled(Card.Text)`
	font: ${PoppinsFontWeight.SemiBold} 28px ${PoppinsFont};
	margin: auto;
	margin-top: 0;
	padding-bottom: 8rem;
`;
export default Hero;
