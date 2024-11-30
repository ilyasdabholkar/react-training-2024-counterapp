import React from 'react'
import { useParams } from 'react-router-dom'

function Products() {

  const {year,month} = useParams();

  return (
    <div className='container text-center'>
        <h1>Products Page</h1>
        <h1>Year : {year} , Month : {month}</h1>
    </div>
  )
}

export default Products