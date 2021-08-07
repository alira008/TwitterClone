import styled from "styled-components";

interface LabelProps {
    isActive?: boolean;
}

export const Label = styled.label<LabelProps>`
    position: absolute;
    pointer-events: none;
    transform: ${({ isActive }) => isActive ? "translate(0, 12px) scale(0.8)" : "translate(0, 23px) scale(1)"};
    transform-origin: top left;
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    color: ${({ isActive }) => isActive ? "var(--twitter-blue)" : "#6f81a5"};
    font-size: 16px;
    line-height: 1;
    padding: 0 8px;
`;

export const Wrapper = styled.div`
    padding: 11px 15px;
    display: flex;
    flex-direction: column;
    position: relative;

    &:focus-within ${Label} {
        transform: translate(0, 12px) scale(0.8);
        color: var(--twitter-blue);
    }
`;

export const InputBox = styled.input`
    border: 1px solid rgb(47, 51, 54);
    border-radius: 4px;
    background-color: transparent;
    padding: 26px 8px 8px 8px;
    min-height: 19px;
    color: white;

    &:focus {
        box-shadow: var(--twitter-blue) 0 0 0 1px;
        outline: currentColor none medium;
    }

    &:focus-visible {
        border-color: var(--twitter-blue);
    }
`;

