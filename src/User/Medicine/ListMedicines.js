import React from 'react';
import CustomCard from '../components/UI/CustomCard';

function ListMedicines({ mData }) {
    return (
        <>
            {mData.map((v, i) => {
                return (
                    <div className='col-md-3'>
                        <CustomCard values={v}/>
                    </div>
                )
            })}
        </>
    )
}

export default ListMedicines;