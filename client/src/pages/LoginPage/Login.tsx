import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button/Button';
import FormErrorMessage from '../../components/FormErrorMessage/FormErrorMessage';
import InputField from '../../components/InputField/InputField';
import {
	Wrapper,
	Title,
	Form,
	ButtonWrapper,
	BottomLinks,
	A,
	SpanDot,
} from './Login.styles';
import { loginService } from '../../modules/API/AuthApiProvider';
import { useAuth } from '../../modules/Auth/AuthProvider';

interface Props {}

const Login: React.FC<Props> = () => {
	const history = useHistory();
	const [userField, setUserField] = useState('');
	const [password, setPassword] = useState('');
	const [isUserFieldActive, setIsUserFieldActive] = useState(false);
	const [isPasswordFieldActive, setIsPasswordFieldActive] = useState(false);
	const [inputErrorMessage, setInputErrorMessage] = useState('');
	const { setIsLoggedIn } = useAuth();

	const onChangeField = (
		event: React.ChangeEvent<HTMLInputElement>,
		setValueFunc: React.Dispatch<React.SetStateAction<string>>,
		setActiveFunc: React.Dispatch<React.SetStateAction<boolean>>
	) => {
		const value = event.target.value;
		const isFilled = value ? true : false;
		setValueFunc(value);
		setActiveFunc(isFilled);
	};

	const onClickSignUp = () => {
		history.push('/register');
	};

	const handleLoginSubmit = () => {
		loginService(userField, password)
			.then(() => {
				setIsLoggedIn(true);
				history.push('/home');
			})
			.catch((err) => {
				const errorMessage = err.response.data.error.message;
				// console.log(err.response.data.error.message);

				setInputErrorMessage(errorMessage);
			});
	};

	return (
		<Wrapper>
			<Title>Log in to Birdword</Title>
			<Form>
				{inputErrorMessage && <FormErrorMessage message={inputErrorMessage} />}
				<InputField
					type="text"
					isActive={isUserFieldActive}
					value={userField}
					onChange={(event) =>
						onChangeField(event, setUserField, setIsUserFieldActive)
					}
					label="Username"
				/>
				<InputField
					type="password"
					isActive={isPasswordFieldActive}
					value={password}
					onChange={(event) =>
						onChangeField(event, setPassword, setIsPasswordFieldActive)
					}
					label="Password"
				/>
				<ButtonWrapper>
					<Button
						onClick={handleLoginSubmit}
						disabled={!isUserFieldActive || !isPasswordFieldActive}
						minHeight="46px"
					>
						Log in
					</Button>
				</ButtonWrapper>
				<BottomLinks>
					<A>Forgot password?</A>
					<SpanDot>·</SpanDot>
					<A onClick={onClickSignUp}> Sign up for BirdWord</A>
				</BottomLinks>
			</Form>
		</Wrapper>
	);
};

export default Login;
