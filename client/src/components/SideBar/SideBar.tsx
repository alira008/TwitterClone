import React from 'react';
import TopBar from '../TopBar/TopBar';
import {
	Wrapper,
	UserInfoWrapper,
	UsernameHandleWrapper,
	UsernameWrapper,
	UserhandleWrapper,
	UserFollowingWrapper,
	UserFollowItem,
	UserFollowItemName,
	UserFollowItemNumber,
	ProfilePicWrapper,
	BackgroundWrapper,
} from './SideBar.styles';
import { Close } from '@material-ui/icons';
import IconButton from '../IconButton/IconButton';
import Avatar from '../Avatar/Avatar';
import SideBarNav from '../SideBarNav/SideBarNav';

interface Props {
	username: string;
	userhandle: string;
	toggleSideBar: () => void;
	isSideBarActive: boolean;
}

const SideBar: React.FC<Props> = ({
	username,
	userhandle,
	toggleSideBar,
	isSideBarActive,
}) => {
	const menuName = (
		<h3>
			<span>Account info</span>
		</h3>
	);

	const closeMenuButton = (
		<IconButton
			Icon={Close}
			iconSize="md"
			color="var(--twitter-blue)"
			onClick={toggleSideBar}
		/>
	);

	return (
		<BackgroundWrapper isActive={isSideBarActive}>
			<Wrapper>
				<TopBar
					firstElement={menuName}
					thirdElement={closeMenuButton}
					isSideBar={true}
				/>
				<UserInfoWrapper>
					<Avatar size="md" link="/" seed={username} />
					<UsernameHandleWrapper>
						<UserhandleWrapper>{userhandle}</UserhandleWrapper>
						<UsernameWrapper>@{username}</UsernameWrapper>
					</UsernameHandleWrapper>
					<UserFollowingWrapper>
						<UserFollowItem>
							<UserFollowItemNumber>170 </UserFollowItemNumber>
							<UserFollowItemName>Following</UserFollowItemName>
						</UserFollowItem>
						<UserFollowItem>
							<UserFollowItemNumber>1 </UserFollowItemNumber>
							<UserFollowItemName>Followers</UserFollowItemName>
						</UserFollowItem>
					</UserFollowingWrapper>
				</UserInfoWrapper>
				<SideBarNav username={username} />
			</Wrapper>
		</BackgroundWrapper>
	);
};

export default SideBar;
