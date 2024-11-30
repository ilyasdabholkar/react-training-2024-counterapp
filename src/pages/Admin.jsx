import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Admin() {
  const navigate = useNavigate();

  return (
    <div className='container text-center'>
        <h1>Admin Page</h1>     
        <button className='btn btn-success' onClick={()=>navigate('/products')}>Go To Products</button>
    </div>
  )
}

export default Admin