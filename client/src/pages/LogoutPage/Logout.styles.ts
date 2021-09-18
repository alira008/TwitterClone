import styled from 'styled-components';

export const Wrapper = styled.div`
	z-index: 5;
	height: 100vh;
	background-color: rgba(73, 90, 105, 0.4);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CenterSquare = styled.div`
	display: flex;
	flex-direction: column;
	background-color: var(--bg-color);
	padding: 27px;
	border-radius: 16px;
	width: 70%;
`;

export const IconWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 15px;

	& > svg {
		font-size: 30px;
	}
`;

export const TitleWrapper = styled.div`
	font-size: 19px;
	font-weight: 700;
	font-family: inherit;
	line-height: 23px;
	margin-bottom: 8px;
`;

export const DescriptionWrapper = styled.div`
	font-size: 14px;
	font-weight: 400;
	font-family: inherit;
	line-height: 19px;
	color: var(--gray-color);
`;

export const LogoutButtonWrapper = styled.div`
	margin-top: 23px;
	margin-bottom: 11px;

	& > button {
		width: 100%;

		&:hover {
			background-color: rgba(29, 161, 242, 0.7);
		}
	}
`;
