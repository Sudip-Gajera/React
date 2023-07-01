import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import { Margin } from '@mui/icons-material';

function Medicine_User(props) {

    const [data, setData] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    console.log(searchInput);



    useEffect(() => {
        let localdata = JSON.parse(localStorage.getItem("medicine"));
        if (localdata !== null) {
            setData(localdata);
        }
    }, [])

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value.toLowerCase());
    };

    if (searchInput.length > 0) {
        data.filter((v) => {
            return v.name.match(searchInput);
        });
    }

    return (
        <div style={{ margin: '15px' }}>
            <input style={{
                width: '18rem',
                height: '40px',
            }}
                type="search"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} />
            <div className='row'>
                {data.map((v, i) => {
                    return (
                        <Card
                            style={{
                                width: '17rem',
                                margin: '15px'
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h5"> {v.name} </CardTitle>
                                <CardText>
                                    {v.disc}
                                </CardText>
                                <CardSubtitle
                                    className="mb-2"
                                    tag="h6"
                                >
                                    {v.price} $
                                </CardSubtitle>
                                <CardSubtitle
                                    className="mb-2"
                                    tag="h6"
                                >
                                    Expiry: {v.date}
                                </CardSubtitle>
                            </CardBody>
                        </Card>
                    )
                })}
            </div>
        </div>
    );
}

export default Medicine_User;