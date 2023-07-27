import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/UI/Button/Button';
import { decCart, deleteCart, incCart } from '../../../redux/action/cart.action';

function Cart(props) {

    let dispatch = useDispatch();

    let medicine = useSelector((state) => state.medicineData);
    let cart = useSelector((state) => state.cart);

    // console.log(medicine, cart);

    let fdata = cart.item.map((v) => {
        let mdata = medicine.medicineData.find((m) => m.id === v.pid)
        let data = { ...mdata, ...v }

        return data;
    })

    let total = fdata.reduce((acc, v) => acc + v.price * v.qty, 0);

    const handleInc = (id) => {
        dispatch(incCart(id));
    }

    const handleDec = (id) => {
        dispatch(decCart(id));
    }

    const handleDelete = (id) => {
        console.log(id);
        dispatch(deleteCart(id));
    }

    console.log(fdata);

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    <h2>Cart</h2>
                </div>
                {
                    fdata.map((v) => {
                        return (
                            <>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <div className="d-flex flex-row align-items-center">
                                                <div className="ms-3">
                                                    <h5>{v.name}</h5>
                                                    <p className="small mb-0">{v.desc.substring(0, 100)}...</p>
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
                                <div className="ms-3">
                                    <h4>Total Amount</h4>
                                </div>
                            </div>
                            <div className="d-flex flex-row align-items-center">
                                <div style={{ width: 95 }}>
                                    <h5 className="mb-0">${total}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;