import React from 'react';
import {
	ProfileHeaderPicWrapper,
	ProfileInfoWrapper,
	PfpFollowWrapper,
	UserInfoWrapper,
	UserDescriptionWrapper,
	UserMiscInfoWrapper,
	UserFollowCountWrapper,
	PfpWrapper,
	ButtonWrapper,
	UsernameWrapper,
	UserHandleWrapper,
	UserMiscInfoItem,
	UserFollowItem,
	UserFollowItemName,
	UserFollowItemNumber,
	IconWrapper,
} from './ProfileHeader.styles';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import {
	LocationOnOutlined,
	CakeOutlined,
	CalendarTodayOutlined,
} from '@material-ui/icons';

interface Props {
	username: string;
	userHandle: string;
	description: string;
	dateOfBirth: string;
	location: string;
}

const ProfileHeader: React.FC<Props> = ({
	username,
	userHandle,
	description,
	dateOfBirth,
	location,
}) => {
	return (
		<>
			<ProfileHeaderPicWrapper></ProfileHeaderPicWrapper>
			<ProfileInfoWrapper>
				<PfpFollowWrapper>
					<PfpWrapper>
						<Avatar size="lg" seed={username} link="/" />
					</PfpWrapper>
					<ButtonWrapper>
						<Button bgColor="white" color="black">
							Follow
						</Button>
					</ButtonWrapper>
				</PfpFollowWrapper>
				<UserInfoWrapper>
					<UserHandleWrapper>{userHandle}</UserHandleWrapper>
					<UsernameWrapper>@{username}</UsernameWrapper>
				</UserInfoWrapper>
				<UserDescriptionWrapper>{description}</UserDescriptionWrapper>
				<UserMiscInfoWrapper>
					<UserMiscInfoItem>
						<LocationOnOutlined /> {location}
					</UserMiscInfoItem>
					<UserMiscInfoItem>
						<CakeOutlined />
						{dateOfBirth}
					</UserMiscInfoItem>
					<UserMiscInfoItem>
						<CalendarTodayOutlined /> Joined May 2010
					</UserMiscInfoItem>
				</UserMiscInfoWrapper>
				<UserFollowCountWrapper>
					<UserFollowItem>
						<UserFollowItemNumber>200 </UserFollowItemNumber>
						<UserFollowItemName>Following</UserFollowItemName>
					</UserFollowItem>
					<UserFollowItem>
						<UserFollowItemNumber>2.2M </UserFollowItemNumber>
						<UserFollowItemName>Followers</UserFollowItemName>
					</UserFollowItem>
				</UserFollowCountWrapper>
			</ProfileInfoWrapper>
		</>
	);
};

export default ProfileHeader;
