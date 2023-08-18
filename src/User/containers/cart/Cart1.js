import React, { useEffect, useState } from 'react';

function Cart1(props) {

    const [getdata, setGetdata] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        let addToCartData = JSON.parse(localStorage.getItem('cartID'));
        setCart(addToCartData);
        try {
            fetch("http://localhost:3004/medicines")
                .then((res) => res.json())
                .then((data) => setGetdata(data))
                .catch((error) => console.log(error))
        } catch (error) {
            console.log(error);
        }
    }, [])

    let cartItem = cart.map((v) => {
        let mdata = getdata.find((m) => m.id === v.pid);

        let fdata = { ...mdata, ...v }

        return fdata;
    })

    console.log(cartItem);

    let total = cartItem.reduce((acc, v) => acc + v.price * v.qty, 0);

    const handleInc = (id) => {
        console.log(id);
        let data = cart.map((v) => {
            if (v.pid === id) {
                return { ...v, qty: v.qty + 1 }
            } else {
                return v
            }
        })
        setCart(data);
        localStorage.setItem('cartID', JSON.stringify(data));
    }

    const handleDec = (id) => {
        console.log(id);
        let data = cart.map((v) => {
            if (v.pid === id && v.qty > 1) {
                return { ...v, qty: v.qty - 1 }
            } else {
                return v
            }
        })
        setCart(data);
        localStorage.setItem('cartID', JSON.stringify(data));
    }

    const handleDelete = (id) => {
        console.log(id);

        let fdata = cartItem.filter((v) => v.pid != id)
        setCart(fdata);
        localStorage.setItem('cartID', JSON.stringify(fdata));
    }

    return (
        <section id="medicines" className="medicines">
            <div className="container">
                <div className="section-title">
                    <h2>111111111Cart11111111</h2>
                </div>
            </div>
            <div className='container'>
                {
                    cartItem.map((v) => {
                        return (
                            <>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex flex-row align-items-center">
                                                <div className="ms-3">
                                                    <h5>{v.name}</h5>
                                                    <p className="small mb-0">{v.desc}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center">
                                                <div className="d-flex mx-5">
                                                    <button onClick={() => handleDec(v.pid)}>-</button>
                                                    <h5 className='mx-3'>{v.qty}</h5>
                                                    <button onClick={() => handleInc(v.pid)}>+</button>
                                                </div>
                                                <div style={{ width: 80 }}>
                                                    <h5 className="mb-0">${v.price * v.qty}</h5>
                                                </div>
                                                <a style={{ color: '#FF6337' }} onClick={() => handleDelete(v.pid)}><i className="fas fa-trash-alt" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex flex-row align-items-center">
                            </div>
                            <div className="d-flex flex-row align-items-center">
                                <div className="d-flex mx-5">
                                    <h5 className='mx-3'>Total Payable Amount</h5>
                                </div>
                                <div style={{ width: 80 }}>
                                    <h5 className="mb-0">$ {total}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart1;