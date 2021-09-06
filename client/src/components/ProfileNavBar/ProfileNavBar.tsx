import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Nav, NavItem, TextWrapper, SelectedBar } from './ProfileNavBar.styles';

interface Params {
	username: string;
	option: undefined | string;
}
interface Props {
	username: string;
}

const ProfileNavBar: React.FC<Props> = ({ username }) => {
	const { option } = useParams<Params>();
	const baseUrl = `/${username}`;

	const [postsNavActive, setPostsNavActive] = useState(false);
	const [repliesNavActive, setRepliesNavActive] = useState(false);
	const [mediaNavActive, setMediaNavActive] = useState(false);
	const [likesNavActive, setLikesNavActive] = useState(false);

	useEffect(() => {
		setPostsNavActive(false);
		setRepliesNavActive(false);
		setMediaNavActive(false);
		setLikesNavActive(false);
		if (option === undefined) {
			setPostsNavActive(true);
		} else if (option === 'with_replies') {
			setRepliesNavActive(true);
		} else if (option === 'media') {
			setMediaNavActive(true);
		} else if (option === 'likes') {
			setLikesNavActive(true);
		}
	}, [option]);

	return (
		<Nav>
			<NavItem>
				<Link to={baseUrl}>
					<TextWrapper>
						Posts
						<SelectedBar active={postsNavActive} />
					</TextWrapper>
				</Link>
			</NavItem>
			<NavItem>
				<Link to={baseUrl + '/with_replies'}>
					<TextWrapper>
						Posts &amp; Replies
						<SelectedBar active={repliesNavActive} />
					</TextWrapper>
				</Link>
			</NavItem>
			<NavItem>
				<Link to={baseUrl + '/media'}>
					<TextWrapper>
						Media
						<SelectedBar active={mediaNavActive} />
					</TextWrapper>
				</Link>
			</NavItem>
			<NavItem>
				<Link to={baseUrl + '/likes'}>
					<TextWrapper>
						Likes
						<SelectedBar active={likesNavActive} />
					</TextWrapper>
				</Link>
			</NavItem>
		</Nav>
	);
};

export default ProfileNavBar;
