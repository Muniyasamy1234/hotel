import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthProvi';

const AdLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userList, setUserlist] = useState([]);
    const [error, setError] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3000/password')
            .then(res => setUserlist(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const user = userList.find(user => user.username === username);
        if (user) {
            if (user.password === password) {
                auth.login(user.username); 
                navigate('/admin')

            } else {
                setError('Incorrect Password');
            }
        } else {
            setError('Username not found');
        }
    }

    return (
        <div className='boxe'>
            <h1>Login</h1>
            <form className='boxs' onSubmit={handleLogin} >
                <table>
                    <tbody>
                        <tr>
                            <td><input className='input1' type='text' placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><input className='input1' type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><button className='buttons' type='submit'>Login</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}

export default AdLogin;
