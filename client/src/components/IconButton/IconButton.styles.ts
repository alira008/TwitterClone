import styled from 'styled-components';

interface WrapperProps {
    color?: string;
    hoverColor?: string;
    bgHoverColor?: string;
}

interface TextWrapperProps {
}

interface IconWrapperProps {
    size?: string;
}

export const IconWrapper = styled.div<IconWrapperProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    width: 36px;
    border-radius: 50%;

    &> svg {
        font-size: ${({ size }) => size === "md" ? "24px" : "14px"};
        vertical-align: top;
    }
`;

export const Wrapper = styled.button<WrapperProps>`
    color: ${({ color }) => color ? color : "var(--gray-color)"};
    background-color: inherit;
    border: none;
    cursor: pointer;
    display: flex;

    &:hover {
        color: ${({ hoverColor }) => hoverColor ? hoverColor : "var(--twitter-blue)"};
    }

    &:hover ${IconWrapper} {
        background-color: ${({ bgHoverColor }) => bgHoverColor ? bgHoverColor : "var(--twitter-blue-opacity)"};
    }

`;


export const TextWrapper = styled.span<TextWrapperProps>`
    display: flex;
    height: 100%;
    padding-left: 3px;
    padding-right: 16px;
    min-width: 4px;
    font-size: 12px;
    font-weight: thin;
    align-items: center;
`;