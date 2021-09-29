import styled from "styled-components";
import React from "react";
import Card from "react-bootstrap/Card";
import { PoppinsFont, PoppinsFontWeight } from "../utilities";

const PrintCard = ({ picture, title }) => {
	return (
		<StyledCard>
			<Card.Img variant="top" src={picture} />
			<StyledCardBody>
				<Card.Text>{title}</Card.Text>
			</StyledCardBody>
		</StyledCard>
	);
};
const StyledCardBody = styled(Card.Body)`
	padding: 1rem;
	font: ${PoppinsFontWeight.Medium} 20px ${PoppinsFont};
	height: 225px;
`;
const StyledCard = styled(Card)`
	margin: 1rem;
`;
export default PrintCard;
