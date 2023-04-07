import React from 'react'

import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
    <div className='nav'>
    <Link to="/" className='link'> Log-Out </Link>
    <Link to="/" className='link' > LogIn </Link>
    <Link to="/signup" className='link' > SignUp </Link>
    </div>
    </div>
  )
}
