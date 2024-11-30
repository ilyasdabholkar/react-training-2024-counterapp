import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({totalCounters}) {
  return (
    <nav className='navbar navbar-light bg-light'>
        <a className='navbar-brand' href="#top">
            Navbar
        </a>
        <ul className="d-flex" style={{listStyleType:'none'}}>
            <li className='mx-4'>
                <Link to="/">Home</Link>
            </li>
            <li className='mx-4'>
                <Link to="/products">Products</Link>
            </li>
            <li className='mx-4'>
                <Link to="/admin">Admin</Link>
            </li>
        </ul>
        <span className="badge badge-pill bg-secondary m-2">
            {totalCounters}
        </span>
    </nav>
  )
}

export default Navbar