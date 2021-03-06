import React from 'react';
import { Wrapper, InputBox, DateFieldBox, Label } from './InputField.styles';

interface Props {
	type: string;
	isActive: boolean;
	label: string;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<Props> = ({
	type,
	isActive,
	label,
	value,
	onChange,
}) => {
	return (
		<Wrapper>
			<Label isActive={isActive}>{label}</Label>
			{type === 'date' ? (
				<DateFieldBox type={type} value={value} onChange={onChange} />
			) : (
				<InputBox type={type} value={value} onChange={onChange} />
			)}
		</Wrapper>
	);
};

export default InputField;
