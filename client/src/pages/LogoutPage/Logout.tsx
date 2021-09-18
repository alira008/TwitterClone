import React from 'react';
import {
	Wrapper,
	CenterSquare,
	IconWrapper,
	TitleWrapper,
	DescriptionWrapper,
	LogoutButtonWrapper,
} from './Logout.styles';
import { RecordVoiceOver } from '@material-ui/icons';
import Button from '../../components/Button/Button';
import { useHistory } from 'react-router';
import { useAuth } from '../../modules/Auth/AuthProvider';
import Cookies from 'js-cookie';

interface Props {}

const Logout: React.FC<Props> = ({}) => {
	const history = useHistory();
	const { setIsLoggedIn } = useAuth();

	const logoutOnClick = () => {
		setIsLoggedIn(false);
		Cookies.remove('user_id');
		history.push('/');
	};

	const cancelOnClick = () => {
		history.push('/home');
	};

	return (
		<Wrapper>
			<CenterSquare>
				<IconWrapper>
					<RecordVoiceOver />
				</IconWrapper>
				<TitleWrapper>Log out of BirdWord?</TitleWrapper>
				<DescriptionWrapper>
					You can always log back in at any time. If you just want to switch
					accounts you can do that by adding an existing account.
				</DescriptionWrapper>
				<LogoutButtonWrapper>
					<Button onClick={logoutOnClick}>Log out</Button>
				</LogoutButtonWrapper>
				<Button color="black" bgColor="white" onClick={cancelOnClick}>
					Cancel
				</Button>
			</CenterSquare>
		</Wrapper>
	);
};

export default Logout;
