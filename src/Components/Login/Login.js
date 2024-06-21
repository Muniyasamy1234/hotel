import React, { useEffect, useState } from 'react'
import { useAuth } from '../Auth/AuthProvi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [userList, setUserlist] = useState([]);
    const [error, setError] = useState('');

    const auth = useAuth()

    useEffect(() => {
        axios.get('http://localhost:3001/user')
            .then(res => setUserlist(res.data))
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const user = userList.find(x => x.mail === mail);

        if (user) {
            if (user.password === password) {
                auth?.login(user.name)
                navigate('/')
            }
            else{
                setError(`Incorrect Password`)
            }
        }
        else{
            setError(`UserName Not found`)
        }
    }


    return (
        <div className='boxe'>
            <h1>Login</h1>
            <form className='boxs' onSubmit={handleLogin} >
                <table>
                    <tbody>

                        <tr>
                            <td><input className='input1' type='email' placeholder='Enter Email' value={mail} onChange={(e) => setMail(e.target.value)} /></td>
                        </tr>

                        <tr>
                            <td><input className='input1' type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><button className='buttons' type='submit'>Login</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>

            {error}

        </div>
    )
}

export default Login