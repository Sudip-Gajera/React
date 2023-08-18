import React from 'react';
import CustomCard from '../components/UI/CustomCard';

function ListMedicines({ mData, handleCart1, handleFavorite }) {
    return (
        <>
            {mData.map((v, i) => {
                return (
                    <div className='col-md-6'>
                        <CustomCard
                            values={v}
                            btnval={"Add to Cart"}
                            onclick1 = {handleCart1}
                            favorite = {handleFavorite}
                        />
                    </div>
                )
            })}
        </>
    )
}

export default ListMedicines;