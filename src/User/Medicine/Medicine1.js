import React, { useEffect, useState } from 'react';
import CustomCard from '../components/UI/CustomCard';


function Medicine1(props) {

    const [getdata, setGetdata] = useState([]);

    useEffect(() => {
        try {
            fetch("http://localhost:3004/medicines")
                .then((res) => res.json())
                .then((data) => setGetdata(data))
                .catch((error) => console.log(error))
        } catch (error) {
            console.log(error);
        }
    }, [])

    const handleCart = (id) => {
        console.log(id);
        let addToCartData = JSON.parse(localStorage.getItem('cartID'));

        if (addToCartData === null) {
            localStorage.setItem('cartID', JSON.stringify([{
                pid: id,
                qty: 1
            }]));
        } else {
            let mdata = addToCartData.find((v) => v.pid === id)
            if (mdata) {
                mdata.qty++;
                localStorage.setItem('cartID', JSON.stringify(addToCartData));
            } else {
                addToCartData.push({
                    pid: id,
                    qty: 1
                });
                localStorage.setItem('cartID', JSON.stringify(addToCartData));
            }
        }
    }

    return (
        <section id="medicines" className="medicines">
            <div className="container">
                <div className="section-title">
                    <h2>111111111Medicines11111111</h2>
                </div>
            </div>
            <div className='container row'>
                {
                    getdata.map((v) => {
                        return (
                            <div className='col-md-3'>
                                <CustomCard
                                    values={v}
                                    btnval={"Add to Cart"}
                                    onclick1={handleCart}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Medicine1;