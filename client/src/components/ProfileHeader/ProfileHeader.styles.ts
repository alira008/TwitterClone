import styled from 'styled-components';

export const ProfileHeaderPicWrapper = styled.div`
	min-height: 124px;
	background-color: white;
`;

export const ProfileInfoWrapper = styled.div`
	padding-left: 15px;
	padding-right: 15px;
	padding-top: 11px;
	margin-bottom: 15px;
`;

export const PfpFollowWrapper = styled.div`
	display: flex;
	/* flex-direction: row; */
	justify-content: flex-end;
	align-items: flex-end;
`;

export const UserInfoWrapper = styled.div`
	margin-top: 4px;
	margin-bottom: 11px;
	display: flex;
	flex-direction: column;
`;

export const UserDescriptionWrapper = styled.div`
	margin-bottom: 11px;
	font-weight: 400;
	line-height: 19px;
	overflow-wrap: break-word;
	font-size: 14px;
	color: rgb(217, 217, 217);
`;

export const UserMiscInfoWrapper = styled.div`
	margin-bottom: 11px;
`;

export const UserFollowCountWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

export const PfpWrapper = styled.div`
	position: absolute;
	left: 0;
	margin-left: 15px;
`;

export const ButtonWrapper = styled.div`
	margin-bottom: 11px;
`;

export const UsernameWrapper = styled.span`
	font-size: 19px;
	font-family: inherit;
	font-weight: 800;
	line-height: 23px;
`;

export const UserHandleWrapper = styled.span`
	font-size: 14px;
	font-family: inherit;
	font-weight: 400;
	line-height: 19px;
	color: rgb(110, 118, 125);
`;

export const UserMiscInfoItem = styled.span`
	display: inline-block;
	margin-right: 11px;
	color: rgb(110, 118, 125);
	overflow-wrap: break-word;
	line-height: 11px;
	font-size: 14px;
	font-weight: 400;
`;

export const UserFollowItem = styled.a`
	font-weight: 400;
	font-size: 14px;
	line-height: 19px;
	margin-right: 19px;
`;

export const UserFollowItemName = styled.span`
	color: rgb(110, 118, 125);
`;

export const UserFollowItemNumber = styled.span`
	font-weight: 700;
`;
