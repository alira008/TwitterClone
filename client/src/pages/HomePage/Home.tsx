import React, { useEffect, useState } from 'react';
import FloatingTweetButton from '../../components/FloatingTweetButton/FloatingTweetButton';
import TweetList from '../../components/TweetList/TweetList';
import TopBar from '../../components/TopBar/TopBar';
import Avatar from '../../components/Avatar/Avatar';
import IconButton from '../../components/IconButton/IconButton';
import { Flare } from '@material-ui/icons';
import SideBar from '../../components/SideBar/SideBar';
import { getUserInfoService } from '../../modules/API/UserInfoProvider';

interface Props {}

const HomePage: React.FC<Props> = () => {
	const [username, setUsername] = useState('');
	const [userhandle, setUserhandle] = useState('');
	const [isSideBarActive, setIsSideBarActive] = useState(false);

	const toggleSideBar = () => {
		setIsSideBarActive(!isSideBarActive);
	};

	//  Top bar elements for this page
	const avatar = <Avatar seed={username} onClick={toggleSideBar} />;
	const pageName = (
		<h2>
			<span>Home</span>
		</h2>
	);
	const rightButton = <IconButton Icon={Flare} iconSize="md" color="white" />;

	useEffect(() => {
		console.log(isSideBarActive);
	}, [isSideBarActive]);

	useEffect(() => {
		getUserInfoService()
			.then((data) => {
				setUsername(data.username);
				setUserhandle(data.user_handle);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<TopBar
				firstElement={avatar}
				secondElement={pageName}
				thirdElement={rightButton}
			/>
			<SideBar
				username={username}
				userhandle={userhandle}
				toggleSideBar={toggleSideBar}
				isSideBarActive={isSideBarActive}
			/>
			<FloatingTweetButton link="/compose/tweet" />
			<TweetList />
		</>
	);
};

export default HomePage;
