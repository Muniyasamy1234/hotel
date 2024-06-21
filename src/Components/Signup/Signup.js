import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    const [address, setAddress] = useState('');


    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/user',{
            name,location,address,mail,password
        })
            .then(res => {
                console.log(res.data);
            })
            .catch(err=>{console.log(err);})
            navigate('/login')
    };

    return (
        <div className='boxe'>
            <h1>Signup</h1>
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
                            <td><input className='input1'  type='email' placeholder='Enter Email' value={mail} onChange={(e) => setMail(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><input className='input1'  type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><textarea placeholder='Address' value={address} onChange={(e) => setAddress(e.target.value)}></textarea></td>
                        </tr>
                        <tr>
                            <td><button className='buttons' type='submit'>Signup</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>

            {/* <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mail</th>
                        <th>Location</th>
                        <th>Address</th>
                        <th>File</th>
                    </tr>
                </thead>
                <tbody>
                {result.map((x, index) => 
                <Home name={name} mail={mail} location={location}                                           />
                    )}

                </tbody>
            </table> */}
        </div>
    );
};

export default Signup;