import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styled from "styled-components";
import { below } from "../utilities";

const ScrollButton = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	window.addEventListener("scroll", toggleVisible);

	return (
		<StyledButton>
			<FaArrowCircleUp
				className="scrollTop"
				onClick={scrollToTop}
				style={{ height: 40, display: visible ? "flex" : "none" }}
			/>
		</StyledButton>
	);
};
const StyledButton = styled.div`
	.scrollTop {
		cursor: pointer;
		position: fixed;
		width: 100%;
		left: 45%;
		bottom: 50px;
		height: 20px;
		font-size: 3rem;
		z-index: 10;
		color: #333;

		:hover {
			color: #6c757d;
		}
		${below.med`
            visibility: hidden;
        `}
	}
`;

export default ScrollButton;
