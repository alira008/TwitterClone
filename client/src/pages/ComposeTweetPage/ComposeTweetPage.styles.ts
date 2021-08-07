import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    padding: 11px 15px;
`;

export const LeftWrapper = styled.div`
    margin-right: 11px;
`;

export const RightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 4px;
`;

export const TextArea = styled.textarea`
    background-color: inherit;
    border: none;
    color: whitesmoke;
    width: 100%;
    height: 114px;
    resize: none;
    padding-bottom: 11px;
    padding-top: 11px;
    font-size: 17px;
    font-family: inherit;

    &:placeholder {
        color: rgb(110, 118, 125);
        opacity: 1; 
    }

    &:focus{
        outline: none;
    }
`;