import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/user/api/login', { username, password });
      console.log('Login successful', res.data);
      alert('Login successful');
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  return (
    <div className='flex justify-center m-screen'>
      <div className='text-center shadow-lg py-8 px-8 rounded-lg'>
        <h1 className='text-blue-500 py-4 text-2xl font-bold'>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <label text="">Username</label><br />
          <input className="mb-8 border rounded-lg py-2 px-4" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required /><br />
          <label text="">Password</label><br />
          <input className="mb-8 border rounded-lg py-2 px-4" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
          <button className='bg-blue-500 px-8 py-2 rounded text-white font-bold hover:bg-blue-900 cursor-pointer'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
