import React from 'react';
import SideBarNavItem from '../SideBarNavItem/SideBarNavItem';
import {
	PersonOutline,
	ListAlt,
	RoomOutlined,
	BookmarkBorderOutlined,
	FlashOnOutlined,
	AssignmentOutlined,
	LaunchOutlined,
	BarChartOutlined,
	SettingsOutlined,
	HelpOutlineOutlined,
	WatchLaterOutlined,
	PictureInPictureAltOutlined,
} from '@material-ui/icons';
import Separator from '../Separator/Separator';

interface Props {
	username: string;
}

const SideBarNav: React.FC<Props> = ({ username }) => {
	const profileLink = '/' + username;
	return (
		<>
			<SideBarNavItem name="Profile" Icon={PersonOutline} link={profileLink} />
			<SideBarNavItem name="Lists" Icon={ListAlt} />
			<SideBarNavItem name="Topics" Icon={RoomOutlined} />
			<SideBarNavItem name="Bookmarks" Icon={BookmarkBorderOutlined} />
			<SideBarNavItem name="Moments" Icon={FlashOnOutlined} />
			<SideBarNavItem name="Newsletters" Icon={AssignmentOutlined} />
			<Separator />
			<SideBarNavItem name="Twitter Ads" Icon={LaunchOutlined} />
			<SideBarNavItem name="Analytics" Icon={BarChartOutlined} />
			<Separator />
			<SideBarNavItem name="Settings and privacy" Icon={SettingsOutlined} />
			<SideBarNavItem name="Help Center" Icon={HelpOutlineOutlined} />
			<Separator />
			<SideBarNavItem name="Data Server" Icon={WatchLaterOutlined} />
			<SideBarNavItem name="Display" Icon={PictureInPictureAltOutlined} />
			<Separator />
			<SideBarNavItem name="Log out" link="/logout" />
		</>
	);
};

export default SideBarNav;
