
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

const Star3 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3003/admin') 
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='container'>
            <h1 className='lshotel'>Coiambatore</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {data.map(item => (
                    <div className="col" key={item.id}>
                        <div className="card h-100">
                            <img src={item.image} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">
                                Located in Ooty, 2.2 miles from Ooty Lake, Olives Pleasant Stays provides accommodations with a terrace, free private parking and a restaurant.
                                  {item.address}</p>
                                <p className="card-text">{item.location}</p>
                            </div>
                            <div className="card-footer">
                                <button className="text-muted">Last updated {item.lastUpdated}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Outlet />
        </div>
    )
}

export default Star3;
