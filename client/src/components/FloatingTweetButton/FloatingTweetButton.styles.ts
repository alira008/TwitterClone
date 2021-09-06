import styled from 'styled-components';

interface MyAProps {}

interface WrapperProps {}

export const ButtonWrapper = styled.button<WrapperProps>`
	position: fixed;
	background-color: var(--twitter-blue);
	border-radius: 50%;
	min-width: 3.5rem;
	height: 3.5rem;
	bottom: 5rem;
	right: 19px;
	border: 1px solid var(--border-color);
	z-index: 3;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: rgba(217, 217, 217, 0.2) 0px 0px 5px,
		rgba(217, 217, 217, 0.25) 0px 1px 4px 1px;

	&:hover {
		background-color: rgb(26, 145, 218);
	}
`;

export const InnerWrapper = styled.div<MyAProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	text-decoration: none;
	color: white;
	border-radius: 50%;
`;
