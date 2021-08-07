import styled from "styled-components";

interface WrapperProps {

}

interface InnnerWrapperProps {

}

export const Wrapper = styled.div<WrapperProps>`
    position: fixed;
    top: 0;
    width: 100%;
    color: white;
    background-color: var(--bg-color);
    border-bottom: 1px solid var(--border-color);
    z-index: 1;
`;

export const InnerWrapper = styled.div<InnnerWrapperProps>`
    padding-left: 16px;
    padding-right: 16px;
    height: 50px;
    display: flex;
    align-items: center;
`;

export const FirstElementWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    min-width: 53px;
`;

export const SecondElementWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex-grow: 1;
    flex-shrink: 1;
`;

export const ThirdElementWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    min-width: 30px;
    margin-left: 15px;
`;