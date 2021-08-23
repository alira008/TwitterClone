import React from 'react';
import FloatingTweetButton from '../../components/FloatingTweetButton/FloatingTweetButton';
import TweetList from '../../components/TweetList/TweetList';
import TopBar from '../../components/TopBar/TopBar';
import Avatar from '../../components/Avatar/Avatar';
import IconButton from '../../components/IconButton/IconButton';
import { Flare } from '@material-ui/icons';

interface Props {}

const HomePage: React.FC<Props> = () => {
	//  Top bar elements for this page
	const avatar = <Avatar link="/" />;
	const pageName = (
		<h2>
			<span>Home</span>
		</h2>
	);
	const rightButton = (
		<IconButton Icon={Flare} iconSize="md" color="var(--twitter-blue)" />
	);
	return (
		<>
			<TopBar
				firstElement={avatar}
				secondElement={pageName}
				thirdElement={rightButton}
			/>
			<FloatingTweetButton link="/compose/tweet" />
			<TweetList />
		</>
	);
};

export default HomePage;
