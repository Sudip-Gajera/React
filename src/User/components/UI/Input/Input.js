import React from 'react';
import { BaseInput, InputErr } from './Input.style';

function Input({ errorText , ...rest} ) {
    return (
        <>
            <BaseInput {...rest} errorText={errorText}
                className="form-control" />
            <InputErr errorText={errorText}>
                {errorText}
            </InputErr>
        </>

    );
}

export default Input;