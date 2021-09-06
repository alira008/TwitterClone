import React from 'react';
import {
	Home,
	Search,
	NotificationsNoneOutlined,
	MailOutlined,
} from '@material-ui/icons';
import IconButton from '../IconButton/IconButton';
import { NavWrapper, LinkWrapper } from './BottomMenu.styles';
import { Link } from 'react-router-dom';

interface Props {}

const BottomMenu: React.FC<Props> = () => {
	return (
		<NavWrapper>
			<LinkWrapper>
				<Link to="/home">
					<IconButton Icon={Home} iconSize="md" />
				</Link>
			</LinkWrapper>
			<LinkWrapper>
				<Link to="/">
					<IconButton Icon={Search} iconSize="md" />
				</Link>
			</LinkWrapper>
			<LinkWrapper>
				<Link to="/">
					<IconButton Icon={NotificationsNoneOutlined} iconSize="md" />
				</Link>
			</LinkWrapper>
			<LinkWrapper>
				<Link to="/">
					<IconButton Icon={MailOutlined} iconSize="md" />
				</Link>
			</LinkWrapper>
		</NavWrapper>
	);
};

export default BottomMenu;
