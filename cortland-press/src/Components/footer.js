import React from "react";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { PoppinsFontWeight, PoppinsFont, below } from "../utilities";

export const Footer = () => {
	return (
		<StyledNavbar>
			<StyledFooterItem>orders@carboncopies.com</StyledFooterItem>
			<StyledFooterItem>Tel: 607-753-0022</StyledFooterItem>
			<StyledFooterItem>Fax: 607-753-0026</StyledFooterItem>
			<StyledFooterItem>
				87 Main Street, P.O. Box 5396, Cortland, NY 13045 United States
			</StyledFooterItem>
		</StyledNavbar>
	);
};

const StyledNavbar = styled(Navbar)`
	padding: 2rem 25rem;
	font: ${PoppinsFontWeight.Regular} 15px ${PoppinsFont};
	${below.med`
        padding: 2rem 0;
        font-size: 13px;
        display: block;
        height: 10rem;
        margin-top: 5rem;
    `}
`;
const StyledFooterItem = styled(Nav.Item)`
	margin-left: 8rem;
	${below.med`
        margin: auto;
        margin-bottom: .5rem;
        width: 12rem;
        text-align: center;
        
    `}
`;
