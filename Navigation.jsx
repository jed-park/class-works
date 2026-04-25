import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">MedApp</Link>
        </h1>
        <div className="space-x-4">
          <Link to="/doctor" className="hover:underline">Doctor</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
