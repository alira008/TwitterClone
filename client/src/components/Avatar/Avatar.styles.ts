import styled from 'styled-components';

interface Props {
    size?: string;
}

export const AvatarWrapper = styled.a<Props>`
    overflow: hidden;
    background-color: white;
    height: ${({ size }) =>
        //  if size === "md"
        size === "md" ? "46px" :
            //  else if size === "lg"
            size === "lg" ? "81px" :
                //  else
                "32px"
    };
    width: ${({ size }) =>
        //  if size === "md"
        size === "md" ? "46px" :
            //  else if size === "lg"
            size === "lg" ? "81px" :
                //  else
                "32px"
    };
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    text-decoration: none;
`;