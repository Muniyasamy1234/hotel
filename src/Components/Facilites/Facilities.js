
import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../Auth/AuthProvi';

const Facilities = () => {
    const navigate = useNavigate();
    // const [data, setData] = useState([]);
    const [starhotel1 , setStarHotel1] = useState(false);
    const [starhotel2 , setStarHotel2] = useState(false);
    const [starhotel3 , setStarHotel3] = useState(false);

    const auth = useAuth()

    const handleLogout = () => {
        auth.logout();
        navigate('/');
    }

    // useEffect(() => {
    //     axios.get('http://localhost:3003/admin')
    //         .then(res => setData(res.data))
    //         .catch(err => console.log(err))
    // }, []);


    const star1 =()=>{
        setStarHotel1(true)
        navigate('star1')
    }
    const star2 =()=>{
        setStarHotel2(true)
        navigate('star2')
    }
    const star3 =()=>{
        setStarHotel3(true)
        navigate('star3')
    }


    return (
        <div>
            <div className='container-fluid heading'>
            <h1 className='welcom'>Welcome {auth.user}</h1>
            <h1 className='welcom'>Star Hotels</h1>

            <button className='logoutbtn' onClick={handleLogout}>Logout</button>
            </div>
            <div className='container hotels'>
                <button onClick={star1}>Kodaikanal</button>
                <button onClick={star2}>Ooty</button>
                <button onClick={star3}>Coiambatore</button>
            </div>
            <Outlet />
        </div>
    );
}

export default Facilities;
