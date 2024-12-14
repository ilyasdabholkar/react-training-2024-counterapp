
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <nav className='container navbar navbar-expand-lg navbar-light bg-light'>
    <Link className='navbar-brand' to="/">
        Bank App
    </Link>
    <div className="collapse navbar-collapse">
        <div className='navbar-nav'>
            <Link className='nav-item nav-link' to="/">Accounts</Link>
            <Link className='nav-item nav-link' to="/account/new">Add Account</Link>
        </div>
    </div>
   </nav>
  )
}

export default Navbar