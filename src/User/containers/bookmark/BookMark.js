import React from 'react';
import Heading from '../../components/UI/Heading/Heading';
import { useDispatch, useSelector } from 'react-redux';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import Button from '../../components/UI/Button/Button';
import CustomCard from '../../components/UI/CustomCard';

function BookMark(props) {

    let dispatch = useDispatch();

    let medicine = useSelector((state) => state.medicineData);
    let favoirte = useSelector((state) => state.favoirte);

    console.log(medicine, favoirte);

    let fdata = favoirte.favItem.map((v) => {
        let mdata = medicine.medicineData.find((m) => m.id === v.pid)
        let data = { ...mdata, ...v }

        return data;
    })


    console.log(fdata);



    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <Heading type='title'>Your Favorite Item</Heading>
                </div>
                {
                    fdata.map((v, i) => {
                        return (
                            <div className='container row'>
                                <div className='col-md-6 g-3'>
                                    <CustomCard
                                        values={v}
                                        btnval={"Add to Cart"}
                                    // onclick1={handleCart1}
                                    // favorite={handleFavorite}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default BookMark;