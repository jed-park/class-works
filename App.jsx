import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './Components/Navigation'
import Doctor from './Pages/Doctor'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container mx-auto mt-8 px-4">
        <Routes>
          <Route path="/" element={<h1 className="text-3xl text-center font-bold">Welcome to MedApp</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctor" element={<Doctor />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
