import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import CompanyLogo from "../assets/desktop/Group 4.png";
import styled from "styled-components";
import { PoppinsFontWeight, PoppinsFont } from "../utilities";

const Header = () => {
	return (
		<StyledNavbar sticky="top" collapseOnSelect expand="lg">
			<StyledNavBrand>
				<img src={CompanyLogo} alt="Cortland Press Logo" />
			</StyledNavBrand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Container>
					<Nav className="me-auto">
						<StyledNavLink className="navLink" href="#home">
							Home
						</StyledNavLink>
						<StyledNavLink className="navLink" href="#services">
							Services
						</StyledNavLink>
						<StyledNavLink className="navLink" href="#about">
							About
						</StyledNavLink>
						<StyledNavLink className="navLink" href="#location">
							Location
						</StyledNavLink>
						<StyledNavLink className="navLink" href="#contact">
							Contact
						</StyledNavLink>
					</Nav>
				</Container>
			</Navbar.Collapse>
		</StyledNavbar>
	);
};

const StyledNavbar = styled(Navbar)`
	background-color: #fff;
`;
const StyledNavLink = styled(Nav.Link)`
	margin: auto 2rem;
	color: #333;
	font: ${PoppinsFontWeight.SemiBold} 18px ${PoppinsFont};
	&:hover {
		text-decoration: underline;
	}
`;
const StyledNavBrand = styled(Navbar.Brand)`
	margin-left: 20%;
`;

export default Header;
