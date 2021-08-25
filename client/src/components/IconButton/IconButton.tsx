import React from 'react';
import { Wrapper, IconWrapper, TextWrapper } from './IconButton.styles';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core';

interface Props {
	Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
	iconSize?: string;
	color?: string;
	hoverColor?: string;
	bgHoverColor?: string;
	text?: string;
	fontSize?: number;
	onClick?: () => void;
}

const IconButton: React.FC<Props> = ({
	Icon,
	iconSize,
	color,
	hoverColor,
	bgHoverColor,
	text,
	fontSize,
	onClick,
}) => {
	const isText = text !== undefined;

	return (
		<>
			<Wrapper
				color={color}
				hoverColor={hoverColor}
				bgHoverColor={bgHoverColor}
				onClick={onClick}
			>
				<IconWrapper size={iconSize}>
					<Icon />
				</IconWrapper>
				{/* If text is given as a prop, then output text */}
				{isText && <TextWrapper color={color}>{text}</TextWrapper>}
			</Wrapper>
		</>
	);
};

export default IconButton;
