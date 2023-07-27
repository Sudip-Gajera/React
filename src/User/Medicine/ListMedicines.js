import React from 'react';
import CustomCard from '../components/UI/CustomCard';

function ListMedicines({ mData, handleCart1 }) {
    return (
        <>
            {mData.map((v, i) => {
                return (
                    <div className='col-md-6'>
                        <CustomCard
                            values={v}
                            btnval={"Add to Cart"}
                            onclick1 = {handleCart1}
                        />
                    </div>
                )
            })}
        </>
    )
}

export default ListMedicines;