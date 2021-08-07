import styled from "styled-components";

interface Props {
    bgColor?: string;
    color?: string;
    minHeight?: string;
    marginBot?: string;
    disabled?: boolean;
}

export const ButtonWrapper = styled.button<Props>`
    display: inline-block;
    color: ${({ color }) => color ? color : "white"};
    background-color: ${({ bgColor }) => bgColor ? bgColor : "var(--twitter-blue)"};
    min-width: 30px;
    min-height: ${({ minHeight }) => minHeight ? minHeight : "30px"};
    margin-bottom: ${({ marginBot }) => marginBot ? marginBot : "0"};
    border: 1px solid black;
    cursor: pointer;
    font-family: inherit;
    padding: 0 1em;
    border-radius: 9999px;
    font-size: 14px;
    font-weight: 700;
    opacity: ${({ disabled }) => disabled ? "0.5" : "1"};
`;