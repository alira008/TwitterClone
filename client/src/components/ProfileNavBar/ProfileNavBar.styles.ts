import styled from 'styled-components';

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	border-bottom: 1px solid var(--border-color);
	width: 100%;
`;

export const NavItem = styled.div`
	padding-left: 15px;
	padding-right: 15px;
	display: flex;
	justify-content: center;
	flex-grow: 1;
	flex-shrink: 1;
	color: var(--gray-color);

	& > a {
		color: inherit;
		text-decoration: none;
	}
`;

export const TextWrapper = styled.div`
	position: relative;
	padding-top: 15px;
	padding-bottom: 15px;
`;

interface SelectedBarProps {
	active: boolean;
}

export const SelectedBar = styled.div<SelectedBarProps>`
	position: absolute;
	height: 4px;
	width: 100%;
	bottom: 0px;
	background-color: var(--twitter-blue);
	display: ${({ active }) => (active ? 'block' : 'none')};
`;
