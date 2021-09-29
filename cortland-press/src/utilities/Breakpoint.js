import { css } from "styled-components";

export const size = {
	small: 640,
	med: 768,
	large: 1024,
};

// Setting above media queries

export const above = Object.keys(size).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (min-width: ${size[label]}px) {
			${css(...args)}
		}
	`;
	return acc;
}, {});

// Setting below media queries

export const below = Object.keys(size).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${size[label]}px) {
			${css(...args)}
		}
	`;
	return acc;
}, {});
