import React, { useEffect, useState } from 'react';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core';
import IconButton from '../IconButton/IconButton';
import { FavoriteBorderOutlined, Favorite } from '@material-ui/icons';
import axios from 'axios';
import Cookies from 'js-cookie';

interface Props {
	postID: number;
	totalLikes: number;
}

const LikeButton: React.FC<Props> = ({ postID, totalLikes }) => {
	const uid = Cookies.get('user_id');
	const [iconColor, setIconColor] = useState<string | undefined>(undefined);
	const [favoriteIcon, setFavoriteIcon] = useState<
		OverridableComponent<SvgIconTypeMap<{}, 'svg'>>
	>(FavoriteBorderOutlined);
	const [postLikes, setPostLikes] = useState(totalLikes.toString());

	useEffect(() => {
		axios.post(`/likes/status/${postID}`, { uid: uid }).then((res) => {
			const status: boolean = res.data.like_status ? true : false;
			const color = status ? 'var(--twitter-red)' : undefined;
			setIconColor(color);
			status
				? setFavoriteIcon(Favorite)
				: setFavoriteIcon(FavoriteBorderOutlined);
		});
	}, []);

	const likeOnClick = async () => {
		try {
			await axios.post(`/likes/${postID}`, { uid: uid });
			const res = await axios.post(`/likes/status/${postID}`, { uid: uid });
			const status: boolean = res.data.like_status ? true : false;

			let newLikes: number;
			if (status) {
				newLikes = parseInt(postLikes) + 1;
				setPostLikes(newLikes.toString());
				setIconColor('var(--twitter-red)');
				setFavoriteIcon(Favorite);
			} else {
				newLikes = parseInt(postLikes) - 1;
				setPostLikes(newLikes.toString());
				setIconColor(undefined);
				setFavoriteIcon(FavoriteBorderOutlined);
			}
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<IconButton
			Icon={favoriteIcon}
			text={postLikes}
			color={iconColor}
			hoverColor="var(--twitter-red)"
			bgHoverColor="var(--twitter-red-opacity)"
			onClick={likeOnClick}
		/>
	);
};

export default LikeButton;
