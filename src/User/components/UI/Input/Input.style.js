import { styled } from "styled-components";

export const BaseInput = styled.input`
    border: ${props => props.errorText !== ''? '1px solid red' : '1px solid grey'};
`;

export const InputErr = styled.span`
    display: ${props => props.errorText !== ''? 'inline-block' : 'none'};
    color: red;
`;