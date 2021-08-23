import React, { useEffect } from 'react';
import Button from '../../components/Button/Button';
import { Wrapper, Title, SecondaryInfo, SmallText, A } from './Landing.styles';
import { useAuth } from '../../modules/Auth/AuthProvider';
import { useHistory } from 'react-router-dom';

interface Props {}

const Landing: React.FC<Props> = () => {
	const history = useHistory();
	const { isLoggedIn } = useAuth();

	useEffect(() => {
		if (isLoggedIn) {
			history.push('/home');
		}
	});

	const onClickSignUp = () => {
		history.push('/register');
	};

	const onClickSignIn = () => {
		history.push('/login');
	};

	return (
		<Wrapper>
			<Title>
				<span>Happening now</span>
			</Title>
			<SecondaryInfo>
				<span>Join Twitter today.</span>
			</SecondaryInfo>
			<Button color="black" bgColor="white" minHeight="46px" marginBot="15px">
				Sign up with Google
			</Button>
			<Button
				color="black"
				bgColor="white"
				minHeight="46px"
				marginBot="15px"
				onClick={onClickSignUp}
			>
				Sign up with email
			</Button>
			<SmallText>
				By signing up, you agree to the Terms of Service and Privacy Policy,
				including Cookie Use.
			</SmallText>
			<p>
				Already have an account?<A onClick={onClickSignIn}> Log in</A>
			</p>
		</Wrapper>
	);
};

export default Landing;
