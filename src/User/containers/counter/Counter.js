import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../../redux/action/counter.action';

function Counter(props) {
    const dispatch = useDispatch();
    const counterVal = useSelector(state => state.counter);

    const handleInc = () => {
        dispatch(increment());
    }

    const handleDec = () => {
        dispatch(decrement());
    }

    return (
        <div className='text-center my-3'>
            <h1>Counter</h1>
            <button className='btn-danger' onClick={() => handleDec()}>-</button>
            <span className='mx-3'>{counterVal.count}</span>
            <button className='btn-danger' onClick={() => handleInc()}>+</button>
        </div>
    );
}
export default Counter;