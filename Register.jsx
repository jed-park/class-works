import React,{useState} from 'react'
import axios from 'axios'

function Register() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/user/api/register',{username,password})
      console.log("user is registed")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='flex justify-center  m-screen'>
        <div className='text-center shadow-lg py-4 px-8 rounded-lg'>
            <h1 className='text-blue-500  py-4 text-2xl font-bold'>Registration Form </h1>
            <form onSubmit={handleSubmit}> 
                <label htmlFor="">Username{username}</label><br/>
                <input value={username} onChange={(e)=>setUsername(e.target.value)} className="mb-8 border rounded-lg py-3 px-4" type="text" required/><br />
                <label htmlFor="">Password{password}</label><br />
                <input value={password} onChange={(e)=>setPassword(e.target.value)} className="mb-8 border rounded-lg py-3 px-4" type="password" required/><br />
                <button className='bg-blue-500 px-8 py-2 rounded text-white font-bold hover:bg-blue-900 cursor-pointer'>Register</button>
            
            </form>
        </div>
    </div>
  )
}

export default Register