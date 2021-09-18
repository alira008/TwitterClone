import React, { useState } from 'react';
import { Wrapper, Form, ButtonWrapper } from '../LoginPage/Login.styles';
import { SmallTitle } from './Register.styles';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import { registerService } from '../../modules/API/AuthApiProvider';
import FormErrorMessage from '../../components/FormErrorMessage/FormErrorMessage';
import { useHistory } from 'react-router';
import { useAuth } from '../../modules/Auth/AuthProvider';

interface Props {}

const Register: React.FC<Props> = ({}) => {
	const [usernameFieldValue, setUsernameFieldValue] = useState('');
	const [userHandleFieldValue, setUserHandleFieldValue] = useState('');
	const [passFieldValue, setPassFieldValue] = useState('');
	const [dateFieldValue, setDateFieldValue] = useState('');
	const [isUsernameFieldActive, setIsUsernameFieldActive] = useState(false);
	const [isUserHandleFieldActive, setIsUserHandleFieldActive] = useState(false);
	const [isPassFieldActive, setIsPassFieldActive] = useState(false);
	const [isDateFieldActive, setIsDateFieldActive] = useState(false);
	const [inputErrorMessage, setInputErrorMessage] = useState('');
	const history = useHistory();
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

	const handleSubmit = () => {
		registerService(
			usernameFieldValue,
			userHandleFieldValue,
			passFieldValue,
			dateFieldValue
		)
			.then(() => {
				setIsLoggedIn(true);
				history.push('/home');
			})
			.catch((err) => {
				const errorMessage = err.response.data.error.message;
				setInputErrorMessage(errorMessage);
			});
	};

	return (
		<Wrapper>
			<SmallTitle>Create your account</SmallTitle>
			<Form>
				{inputErrorMessage && <FormErrorMessage message={inputErrorMessage} />}
				<InputField
					type="text"
					isActive={isUsernameFieldActive}
					value={usernameFieldValue}
					onChange={(event) =>
						onChangeField(
							event,
							setUsernameFieldValue,
							setIsUsernameFieldActive
						)
					}
					label="Username"
				/>
				<InputField
					type="text"
					isActive={isUserHandleFieldActive}
					value={userHandleFieldValue}
					onChange={(event) =>
						onChangeField(
							event,
							setUserHandleFieldValue,
							setIsUserHandleFieldActive
						)
					}
					label="Userhandle"
				/>
				<InputField
					type="password"
					isActive={isPassFieldActive}
					value={passFieldValue}
					onChange={(event) =>
						onChangeField(event, setPassFieldValue, setIsPassFieldActive)
					}
					label="Password"
				/>
				<InputField
					type="date"
					isActive={isDateFieldActive}
					value={dateFieldValue}
					onChange={(event) =>
						onChangeField(event, setDateFieldValue, setIsDateFieldActive)
					}
					label="Date of birth"
				/>
				<ButtonWrapper>
					<Button
						onClick={handleSubmit}
						disabled={
							!isUsernameFieldActive || !isPassFieldActive || !isDateFieldActive
						}
						minHeight="46px"
					>
						Sign up
					</Button>
				</ButtonWrapper>
			</Form>
		</Wrapper>
	);
};

export default Register;
