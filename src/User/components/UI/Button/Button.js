import React from 'react';
import { OutlinedBtn, PrimaryBtn, SecondaryBtn } from './Button.style';

function Button({ children, type, btnDisable = false }) {
    // console.log(type);

    const checkButtonType = () => {
        switch (type) {
            case 'primary':
                return PrimaryBtn;
            case 'secondary':
                return SecondaryBtn;
            case 'outlined':
                return OutlinedBtn;
            default:
                return PrimaryBtn;
        }
    }

    const ButtonType = checkButtonType();

    return (
        // <ButtonType disabled={btnDisable}>
        //     {children}
        // </ButtonType>
        <ButtonType>
            {children}
        </ButtonType>
    );
}

export default Button;