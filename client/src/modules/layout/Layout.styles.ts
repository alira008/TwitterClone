import styled from 'styled-components';

interface MainProps {
	isLogoutPage: boolean;
}

export const Main = styled.main<MainProps>`
	padding-bottom: ${({ isLogoutPage }) => (isLogoutPage ? '0rem' : '3rem')};
	color: white;
	position: relative;
	z-index: 0;
	background-color: var(--bg-color);
`;
