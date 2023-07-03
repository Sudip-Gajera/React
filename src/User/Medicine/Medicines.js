import React, { useEffect, useState } from 'react';
import ListMedicines from './ListMedicines';

function Medicines(props) {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]); 

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem("medicine"));
        if (localData !== null) {
            setData(localData);
        }
    }, [])

    const handleSearch = (val) => {
        let localData = JSON.parse(localStorage.getItem("medicine"));

        let fData = localData.filter((v) => 
            v.name.toLowerCase().includes(val.toLowerCase()) ||
            v.price.toString().includes(val) ||
            v.date.toString().includes(val) ||
            v.disc.toLowerCase().includes(val.toLowerCase)
        )

        console.log(fData);
        setFilterData(fData);
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
                    <input type='search' name='search' onChange={(e) => handleSearch(e.target.value)} />
                    <ListMedicines mData={filterData.length > 0 ? filterData: data} />
                </div>
            </div>
        </section>
    );
}

export default Medicines;