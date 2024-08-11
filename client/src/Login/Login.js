import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../stylesheet/Login.css';

import { useNavigate } from 'react-router-dom';


function Login() {

    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/login', {
            username,
            password,
          });
          setMessage(response.data.message);
          if(response.data.message === true){
            alert('Login successful');
            navigate('/home');
          }
          else{
            alert('Login failed please try again with correct credentials');
          }
        
        } catch (error) {
          setMessage('Login failed. Please try again.');
        }
      };

    return (<div className='main-body'>
        <div className='form'>
            <div className='form-header'>
                <h1>Login</h1>
            </div>
            <div className = 'username-row'>
                <label for='username'>Username:</label>
                <input type='text' id='username' name='username' onChange={(e) => setUsername(e.target.value)}
 />
            </div>
            <div className='password-row'>
                <label for='password'>Password:</label>
                <input type='password' id='password' name='password'  onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='sumbit'>
                <button type='submit' onClick={handleSubmit} >Login</button>
            </div>
        </div>
    </div>);
}
export default Login;