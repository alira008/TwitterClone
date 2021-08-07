import React from 'react';
import { ButtonWrapper } from './Button.styles';

interface Props {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    bgColor?: string;
    color?: string;
    minHeight?: string;
    marginBot?: string;
    disabled?: boolean;
}

const Button: React.FC<Props> = ({ children, onClick, bgColor, color, minHeight, marginBot, disabled }) => {
    return (
        <ButtonWrapper type="button" onClick={onClick} bgColor={bgColor} color={color} minHeight={minHeight} marginBot={marginBot} disabled={disabled}>
            <span>{children}</span>
        </ButtonWrapper>
    )
}

export default Button
