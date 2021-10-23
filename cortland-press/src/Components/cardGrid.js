import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardInfo from "../Data/CardInfo";
import PrintCard from "./card";
import { PoppinsFont, PoppinsFontWeight } from "../utilities";
const RepeatCard = () => {
	return CardInfo.map((info) => {
		console.log(info);
		return (
			<Col xs={6} xl={4}>
				<PrintCard key={info.index} picture={info.picture} title={info.title} />
			</Col>
		);
	});
};
const CardGrid = () => {
	return (
		<StyledContainer id="services" fluid>
			<StyledCardGridTitle>Services</StyledCardGridTitle>

			<Row>
				<RepeatCard />
			</Row>
		</StyledContainer>
	);
};

const StyledCardGridTitle = styled.h2`
	font: ${PoppinsFontWeight.Bold} 2rem ${PoppinsFont};
	width: 100%;
	text-align: center;
	margin: 2rem 0;
`;
const StyledContainer = styled(Container)`
	padding-left: 10%;
	padding-right: 10%;
`;
export default CardGrid;
