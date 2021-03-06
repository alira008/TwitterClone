import styled from 'styled-components';

interface Props {}

export const Ul = styled.ul`
	padding-top: 53px;
`;

export const Li = styled.li<Props>`
	padding-left: 15px;
	padding-right: 15px;
	display: flex;
	border-bottom: 1px solid var(--border-color);
`;
