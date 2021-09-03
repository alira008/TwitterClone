import React from 'react';
import { Wrapper } from './FormErrorMessage.styles';

interface Props {
	message: string;
}

const FormErrorMessage: React.FC<Props> = ({ message }) => {
	return <Wrapper>{message}</Wrapper>;
};

export default FormErrorMessage;
