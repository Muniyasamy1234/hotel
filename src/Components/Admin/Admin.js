import React, { useState } from 'react';
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';

const Admin = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [location, setLocation] = useState('');
    const [address, setAddress] = useState('');
 
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3003/admin',{
            name,location,address,image
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err=>{console.log(err);})
            navigate('/facilites')
    };

    return (
        <div className='boxe'>
            <h1>Admin</h1>
            <form className='boxs' onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><input className='input1'  type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><input className='input1'  type='text' placeholder='Enter Location' value={location} onChange={(e) => setLocation(e.target.value)} /> </td>
                        </tr>
                        <tr>
                            <td><input className='input1'  type='text' placeholder='Choose File' value={image} onChange={(e) => setImage(e.target.value)} /> </td>
                        </tr>
                        <tr>
                            <td><textarea placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)}></textarea></td>
                        </tr>

                        <tr>
                            <td><button className='buttons' type='submit'>Admin</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <Outlet /> 
        
        </div>
    );
};

export default Admin;