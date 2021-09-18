import styled from 'styled-components';

export const Wrapper = styled.div`
	padding: 53px 34px 0 34px;
	display: flex;
	flex-direction: column;
`;

export const Title = styled.div`
	margin: 38px 0;
	font-size: 38px;
	font-weight: 700;
`;

export const SecondaryInfo = styled.div`
	margin-bottom: 19px;
	font-size: 22px;
	font-weight: 700;
`;

export const SmallText = styled.div`
	font-size: 12px;
	color: rgb(110, 118, 125);
	margin-bottom: 15px;
	font-weight: 400;
`;

export const A = styled.a`
	color: var(--twitter-blue);
	text-decoration: none;

	&:hover {
		cursor: pointer;
	}
`;
