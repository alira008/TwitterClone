import React from 'react';
import { Create } from '@material-ui/icons';
import { ButtonWrapper, InnerWrapper } from './FloatingTweetButton.styles';
import { Link } from 'react-router-dom';

interface Props {
	link: string;
}

const FloatingTweetButton: React.FC<Props> = ({ link }) => {
	return (
		<ButtonWrapper>
			<Link to={link}>
				<InnerWrapper>
					+<Create />
				</InnerWrapper>
			</Link>
		</ButtonWrapper>
	);
};

export default FloatingTweetButton;
