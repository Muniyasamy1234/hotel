
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';

const Star2 = () => {
    const [data, setData] = useState([]);

    const [books , setBooks] = useState(false)
    const navigate = useNavigate()

    const booknow = ()=>{
        setBooks(true)
        navigate('/book')
    }

    useEffect(() => {
        axios.get('http://localhost:3003/admin') // Assuming this is the correct endpoint for Admin data
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='container'>
            <h1 className='lshotel'>Ooty</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {data.map(item => (
                    <div className="col" key={item.id}>
                        <div className="card h-100">
                            <img src={item.image} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">
                                Located in Coimbatore, 5.8 miles from Codissia Trade Fair Complex, Hotel Park Elanza Coimbatore provides accommodations with an outdoor swimming pool, free private parking, a fitness center and a...
                                    {item.address}</p>
                                <p className="card-text">{item.location}</p>
                            </div>
                            <div className="card-footer">
                                <button onClick={booknow} className="text-muted">Last updated {item.lastUpdated}</button >
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Outlet />
        </div>
    )
}

export default Star2;
