import React from 'react';
import { Home, Search, NotificationsNoneOutlined, MailOutlined } from '@material-ui/icons';
import IconButton from '../IconButton/IconButton';
import { NavWrapper, AWrapper } from './BottomMenu.styles'

interface Props {

}

const BottomMenu: React.FC<Props> = () => {
    return (
        <NavWrapper>
            <AWrapper href="/">
                <IconButton Icon={Home} iconSize="md" />
            </AWrapper>
            <AWrapper href="/">
                <IconButton Icon={Search} iconSize="md" />
            </AWrapper>
            <AWrapper href="/">
                <IconButton Icon={NotificationsNoneOutlined} iconSize="md" />
            </AWrapper>
            <AWrapper href="/">
                <IconButton Icon={MailOutlined} iconSize="md" />
            </AWrapper>
        </NavWrapper>
    )
}

export default BottomMenu;
