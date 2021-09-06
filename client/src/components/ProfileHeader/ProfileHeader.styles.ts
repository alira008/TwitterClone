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

export const UserHandleWrapper = styled.span`
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

export const UserMiscInfoItem = styled.span`
	display: inline-flex;
	align-items: flex-end;
	margin-right: 11px;
	color: var(--gray-color);
	overflow-wrap: break-word;
	line-height: 11px;
	font-size: 14px;
	font-weight: 400;

	& > svg {
		font-size: inherit;
		margin-right: 4px;
	}
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
interface IconWrapperProps {
	size?: string;
}

export const IconWrapper = styled.div<IconWrapperProps>`
	/* display: inline; */
	/* align-self: center; */
	/* height: 36px;
	width: 36px;
	border-radius: 50%; */

	& > svg {
		font-size: ${({ size }) => (size === 'md' ? '24px' : '14px')};
		vertical-align: top;
	}
`;
