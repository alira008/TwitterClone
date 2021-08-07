import React from 'react';
import { Wrapper, InnerWrapper, FirstElementWrapper, SecondElementWrapper, ThirdElementWrapper } from './TopBar.styles';

interface Props {
    firstElement?: JSX.Element | null;
    secondElement?: JSX.Element | null;
    thirdElement?: JSX.Element | null;
}

const TopBar: React.FC<Props> = ({ firstElement, secondElement, thirdElement }) => {

    return (
        <Wrapper>
            <InnerWrapper>
                <FirstElementWrapper>
                    {firstElement}
                </FirstElementWrapper>
                <SecondElementWrapper>
                    {secondElement}
                </SecondElementWrapper>
                <ThirdElementWrapper>
                    {thirdElement}
                </ThirdElementWrapper>
            </InnerWrapper>
        </Wrapper>
    )
}

export default TopBar
