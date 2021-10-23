import styled from "styled-components";
import React from "react";
import Card from "react-bootstrap/Card";
import { PoppinsFont, PoppinsFontWeight, below } from "../utilities";

const PrintCard = ({ picture, title }) => {
	return (
		<StyledCard>
			<StyledImage variant="top" src={picture} />
			<StyledCardBody>
				<Card.Text>{title}</Card.Text>
			</StyledCardBody>
		</StyledCard>
	);
};
const StyledCardBody = styled(Card.Body)`
	padding: 1rem;
	font: ${PoppinsFontWeight.Medium} 20px ${PoppinsFont};
	text-align: center;
	${below.small`
		font-size: 12px;
	`}
`;
const StyledCard = styled(Card)`
	margin: 2rem;
	padding: 3rem;
	height: 80%;
	width: 90%;
	box-shadow: 0px 16px 40px rgba(112, 144, 176, 0.2);
	border-color: #fff;
	${below.small`
		width: 150px;
		height: 150px;
		padding: .5rem;
		margin: 0;
		margin-bottom: 1rem;
	`}
`;
const StyledImage = styled(Card.Img)`
	height: 60px;
	width: 112px;
	margin: 0 auto 2rem auto;
	${below.med`
		height: 50px ;
		width: 50px ;
		margin: auto;
		padding-top: 1rem;
	`}
`;
export default PrintCard;
