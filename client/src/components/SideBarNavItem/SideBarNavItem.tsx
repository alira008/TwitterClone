import React from 'react';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@material-ui/core';
import {
	Wrapper,
	InnerWrapper,
	IconWrapper,
	TextWrapper,
} from './SideBarNavItem.styles';

interface Props {
	name: string;
	Icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
	link?: string;
}

const SideBarNavItem: React.FC<Props> = ({ name, Icon, link }) => {
	return (
		<Wrapper href={link}>
			<InnerWrapper>
				{Icon && (
					<IconWrapper>
						<Icon />
					</IconWrapper>
				)}
				<TextWrapper>{name}</TextWrapper>
			</InnerWrapper>
		</Wrapper>
	);
};

export default SideBarNavItem;
