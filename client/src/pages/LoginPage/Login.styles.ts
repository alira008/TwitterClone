import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 53px 15px 0 15px;
`;

export const Title = styled.div`
	font-size: 29px;
	font-weight: 700;
	margin: 30px 15px 11px 15px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 11px;
`;

export const BottomLinks = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 19px;
`;

export const A = styled.a`
	color: var(--twitter-blue);
	text-decoration: none;
	font-size: 14px;

	&:hover {
		cursor: pointer;
	}
`;

export const SpanDot = styled.span`
	padding: 0 4px;
`;
