import React from 'react';
import { AvatarWrapper } from './Avatar.styles';

interface Props {
    size?: string
    link?: string
}

const Avatar: React.FC<Props> = ({ size, link }) => {
    return (
        <AvatarWrapper size={size} href={link}>
            <img src="" alt="pp" />
        </AvatarWrapper>
    )
};

export default Avatar;
