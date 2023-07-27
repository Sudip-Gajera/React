import { styled } from "styled-components";

const BaseButton = styled.button`
    border: 0;
    padding: 10px 35px;
    transition: 0.4s;
    border-radius: 50px;
`

export const PrimaryBtn = styled(BaseButton)`
    // background: #FF6337;
    background: ${props => props.disabled? 'gray' : '#FF6337'};
    color: #fff;

    &:hover{
        // background: #1c84e3;
        background: ${props => props.disabled? 'gray' : '#1c84e3'};
    }
`

export const SecondaryBtn = styled(BaseButton)`
    background: #000;
    color: #fff;

    &:hover{
        background: red;
    }
`

export const OutlinedBtn = styled(BaseButton)`
    color: #000;
    border: 1px solid black;
    border: 0;
    padding: 10px;
    transition: 0.4s;
    border-radius: 50px;

    &:hover{
        background: orange;
    }
`