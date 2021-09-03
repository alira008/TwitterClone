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
} from './ProfileHeader.styles';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';

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
					<UsernameWrapper>{username}</UsernameWrapper>
					<UserHandleWrapper>@{userHandle}</UserHandleWrapper>
				</UserInfoWrapper>
				<UserDescriptionWrapper>{description}</UserDescriptionWrapper>
				<UserMiscInfoWrapper>
					<UserMiscInfoItem>I {location}</UserMiscInfoItem>
					<UserMiscInfoItem>B {dateOfBirth}</UserMiscInfoItem>
					<UserMiscInfoItem>C Joined May 2010</UserMiscInfoItem>
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
