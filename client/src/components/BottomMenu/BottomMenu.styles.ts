import styled from 'styled-components';

interface Props {}

export const NavWrapper = styled.nav<Props>`
	position: fixed;
	bottom: 0;
	height: 3rem;
	width: 100%;
	border-top: 1px solid var(--border-color);
	background-color: black;
	z-index: 3;
	display: flex;
`;

export const LinkWrapper = styled.div<Props>`
	flex-grow: 1;
	flex-shrink: 1;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover div {
		color: var(--twitter-blue);
		background-color: var(--twitter-blue-opacity);
	}
`;
