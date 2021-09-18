import React from 'react';
import { AvatarWrapper, ButtonWrapper, AnchorWrapper } from './Avatar.styles';

interface Props {
	size?: string;
	link?: string;
	seed?: string;
	onClick?: () => void;
}

const Avatar: React.FC<Props> = ({ size, link, seed, onClick }) => {
	const customPicture =
		'https://avatars.dicebear.com/api/bottts/' +
		seed +
		'.svg?backgroundColor=%23007bff';

	const avatarElement = seed ? (
		<img src={customPicture} alt="pp" />
	) : (
		<img src="" alt="pp" />
	);

	return link ? (
		<AnchorWrapper href={link}>
			<AvatarWrapper size={size}>{avatarElement}</AvatarWrapper>
		</AnchorWrapper>
	) : (
		<ButtonWrapper onClick={onClick}>
			<AvatarWrapper size={size}>{avatarElement}</AvatarWrapper>
		</ButtonWrapper>
	);
};

export default Avatar;
