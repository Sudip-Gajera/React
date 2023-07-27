import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function CustomCard({ values, btnval, onclick1}) {
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
                    <CardTitle tag="h5">
                        {values.name}
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