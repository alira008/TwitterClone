import styled from 'styled-components';

interface WrapperProps {
	isSideBar?: boolean;
}

interface InnnerWrapperProps {}

export const Wrapper = styled.div<WrapperProps>`
	position: fixed;
	width: ${({ isSideBar }) => (isSideBar ? 'initial' : '100%')};
	min-width: ${({ isSideBar }) => (isSideBar ? '280px' : 'initial')};
	max-width: ${({ isSideBar }) => (isSideBar ? '70%' : 'initial')};
	color: white;
	background-color: inherit;
	border-bottom: 1px solid var(--border-color);
	z-index: 1;
`;

export const InnerWrapper = styled.div<InnnerWrapperProps>`
	padding-left: 16px;
	padding-right: 16px;
	height: 50px;
	display: flex;
	align-items: center;
`;

export const FirstElementWrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	min-width: 53px;
`;

export const SecondElementWrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	flex-grow: 1;
	flex-shrink: 1;
`;

export const ThirdElementWrapper = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	min-width: 30px;
	margin-left: 15px;
`;
