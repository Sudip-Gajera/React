import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function CustomCard({ values, btnval, onclick1, favorite}) {
    return (
        <div>
            <Card
                style={{
                    // width: '18rem',
                    // height: '20rem'
                }}
            >
                {/* {
                    values.url ? <img
                        alt="Sample"
                        src="https://picsum.photos/300/200"
                    /> : null
                } */}
                <CardBody>
                    <CardTitle tag="h5" className='d-flex justify-content-between'>
                        {values.name}
                        <FavoriteBorderOutlinedIcon onClick={() => favorite(values.id)}/>
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {values.price} $
                    </CardSubtitle>
                    <CardText>
                        {values.desc}
                    </CardText>
                    <CardText>
                        Expiry Date: {values.expiry}
                    </CardText>
                    {
                        btnval ? 
                        <Button onClick={() => onclick1(values.id)}>
                            {btnval}
                        </Button> : null
                    }
                </CardBody>
            </Card>
        </div>
    );
}

export default CustomCard;