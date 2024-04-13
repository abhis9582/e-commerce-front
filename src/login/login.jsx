import React, { useState } from 'react';
import axios from 'axios';
import '../login/login.css'

export default function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // function handleLogin(e) {
    //     e.preventDefault()
    //     // Code to handle login goes here
    //     props.toggle()
    // }
    const login = async () => {
        let data = {
            "email": username,
            "password": password
        }
        axios.post(process.env.REACT_APP_API_URL + "myapp/auth/authenticate", data)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                //setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    return (
        <div className="popup">
            <div className="popup-inner">
                <div className="row mt-1">
                    <div className="col-11 text-center">
                        <h2>Login</h2>
                    </div>
                    <div className="col-1 text-end">
                        <h2 className='cursor-pointer' onClick={props.toggle}>x</h2>
                    </div>
                </div>
                <form className='mt-5'>
                    <label>
                        Username:
                        <input  className='mt-2' type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    </label>
                    <label>
                        Password:
                        <input  className='mt-2' type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </label>
                    <button className='btn btn-sucess' type="button" onClick={login}>Login</button>
                    <br />
                    <a href="/">Sign up</a>
                </form>
            </div>
        </div>
    )
}