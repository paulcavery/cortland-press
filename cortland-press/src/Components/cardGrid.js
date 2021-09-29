import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardInfo from "../Data/CardInfo";
import PrintCard from "./card";
const RepeatCard = () => {
	return CardInfo.map((info) => {
		return (
			<Col xs={6} lg={4}>
				<PrintCard key={info.index} picture={info.picture} title={info.title} />
			</Col>
		);
	});
};
const CardGrid = () => {
	return (
		<Container fluid>
			<Row>
				<RepeatCard />
			</Row>
		</Container>
	);
};

export default CardGrid;
