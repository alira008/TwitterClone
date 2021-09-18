import styled from 'styled-components';

interface SideBarProps {
	isActive: boolean;
}

export const BackgroundWrapper = styled.div<SideBarProps>`
	height: 100vh;
	position: fixed;
	width: 100%;
	z-index: 4;
	background-color: ${({ isActive }) =>
		isActive ? 'rgba(73, 90, 105, 0.2)' : 'none'};
	transform: ${({ isActive }) =>
		isActive ? 'translateX(0)' : 'translateX(-100%)'};
	transition: transform 0.2s ease-in-out, background-color 0.1s ease-in-out;
`;

export const Wrapper = styled.div`
	height: 100vh;
	max-width: 70%;
	min-width: 280px;
	z-index: 4;
	position: relative;
	background-color: var(--bg-color);
	overflow-y: scroll;
`;

export const UserInfoWrapper = styled.div`
	padding: 69px 16px 0 16px;
`;

export const ProfilePicWrapper = styled.div`
	/* padding: 4px 4px 0 4px; */
`;

export const UsernameHandleWrapper = styled.a`
	padding-top: 12px;
	padding-bottom: 12px;
	display: flex;
	flex-direction: column;
`;

export const UserhandleWrapper = styled.span`
	font-size: 19px;
	font-family: inherit;
	font-weight: 800;
	line-height: 23px;
`;

export const UsernameWrapper = styled.span`
	font-size: 14px;
	font-family: inherit;
	font-weight: 400;
	line-height: 19px;
	color: var(--gray-color);
`;

export const UserFollowingWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

export const UserFollowItem = styled.a`
	font-weight: 400;
	font-size: 14px;
	line-height: 19px;
	margin-right: 19px;
`;

export const UserFollowItemName = styled.span`
	color: var(--gray-color);
`;

export const UserFollowItemNumber = styled.span`
	font-weight: 700;
`;
