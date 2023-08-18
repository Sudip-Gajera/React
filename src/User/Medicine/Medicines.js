import React, { useEffect, useState } from 'react';
import ListMedicines from './ListMedicines';
import { useDispatch, useSelector } from 'react-redux';
import { getMedicineData } from '../../redux/action/medicine.action';
import Input from '../components/UI/Input/Input';
// import { addtoCart } from '../../redux/action/cart.action';
import { favoriteItem } from '../../redux/action/favorite.actin';
import { addtocart } from '../../redux/slice/cartSlice';

function Medicines(props) {
    const dispatch = useDispatch();
    const medicineData = useSelector((state) => state.medicineData)

    const [filterData, setFilterData] = useState([]); 

    useEffect(() => {
        dispatch(getMedicineData());
    }, [])

    const handleCart = (id) => {
        // dispatch(addtoCart(id));
        dispatch(addtocart({pid: id, qty:1}))
        console.log("handleCart called", id);
    }

    const handleSearch = (val) => {
        let mdata = medicineData.medicineData
        let fData =  mdata.filter((v) => 
            v.name.toLowerCase().includes(val.toLowerCase()) ||
            v.price.toString().includes(val) ||
            v.expiry.toString().includes(val) ||
            v.desc.toLowerCase().includes(val.toLowerCase)
        )

        console.log(fData);
        setFilterData(fData);
    }

    const handleFavorite = (id) => {
        console.log("favorite called", id);
        dispatch(favoriteItem(id));
    }

    return (
        <section id="medicines" className="medicines">
            <div className="container">
                <div className="section-title">
                    <h2>Medicines</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                        luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                </div>
                <div className='row g-3'>
                    <Input type='search' name='search' onChange={(e) => handleSearch(e.target.value)}/>
                    <ListMedicines 
                        mData={filterData.length > 0 ? filterData: medicineData.medicineData} 
                        handleCart1 = {handleCart}
                        handleFavorite = {handleFavorite}
                        />
                </div>
            </div>
        </section>
    );
}

export default Medicines;