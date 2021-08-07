import React from 'react';
import { Create } from '@material-ui/icons';
import { MyA, Wrapper } from './FloatingTweetButton.styles'

interface Props {
    link: string
}

const FloatingTweetButton: React.FC<Props> = ({ link }) => {
    return (
        <Wrapper>
            <MyA href={link}>+<Create /></MyA>
        </Wrapper>
    )
}

export default FloatingTweetButton;