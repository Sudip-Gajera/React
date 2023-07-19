import React from 'react';
import { SubTitle, Title } from './Heading.style';

function Heading({children, type}) {
    console.log(type);

    const checkHeadingType = () => {
        switch (type) {
            case 'title':
                return Title;
            case 'subTitle':
                return SubTitle;
            default:
                return SubTitle;
        }
    }

    const HeadingType = checkHeadingType();
    return (
        <HeadingType>
            {children}
        </HeadingType>
    );
}

export default Heading;