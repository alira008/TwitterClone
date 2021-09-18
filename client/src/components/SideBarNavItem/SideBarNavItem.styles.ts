import styled from 'styled-components';

export const Wrapper = styled.a`
	display: flex;
	text-decoration: none;
	color: inherit;

	&:hover {
		background-color: rgba(73, 90, 105, 0.2);
	}
`;

export const InnerWrapper = styled.div`
	display: flex;
	align-items: center;
	padding: 15px;
	width: 100%;
`;

export const IconWrapper = styled.div`
	display: flex;
	margin-right: 11px;
	color: var(--gray-color);

	& > svg {
		font-size: 1.25em;
	}
`;

export const TextWrapper = styled.span``;
