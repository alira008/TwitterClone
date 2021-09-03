import React from 'react';
import { AvatarWrapper } from './Avatar.styles';

interface Props {
	size?: string;
	link?: string;
	seed?: string;
}

const Avatar: React.FC<Props> = ({ size, link, seed }) => {
	const customPicture =
		'https://avatars.dicebear.com/api/bottts/' +
		seed +
		'.svg?backgroundColor=%23007bff';
	return (
		<AvatarWrapper size={size} href={link}>
			{seed ? <img src={customPicture} alt="pp" /> : <img src="" alt="pp" />}
		</AvatarWrapper>
	);
};

export default Avatar;
