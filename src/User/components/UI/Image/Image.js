import React from 'react';
import { Img } from './Image.style';

function Image({ ...rest }) {
    return (
        <Img {...rest}
        className="img-fluid" />
    );
}

export default Image;