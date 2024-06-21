import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

const Star1 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3003/admin') 
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='container'>
            <h1 className='lshotel'>Kodaikanal</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {data.map(item => (
                    <div className="col" key={item.id}>
                        <div className="card h-100">
                            <img src={item.image} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h3 className="card-title">{item.name}</h3>
                                <p className="card-text">
                                Located in Kodaikānāl, within 3.5 miles of Bear Shola Falls and 4 miles of Bryant Park, Dvara Luxury Resort Kodaikanal provides accommodations with a restaurant and free WiFithroughout the property as...
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

export default Star1;
