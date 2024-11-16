import React from 'react'
import { useState } from 'react';

function Counter(props) {
  function formatCount(){
    return props.counter.value === 0 ? "Zero" : props.counter.value;
  }

  function getBadgeClasses(){
    let classes = "badge m-2 bg-";
    classes += props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }


  return (
    <>
        {props.children}
        <h1 className={getBadgeClasses()}>{formatCount()}</h1>
        <button onClick={()=>props.onIncrement(props.counter)} className='btn btn-sm btn-secondary' >
            Increment
        </button>
        <button onClick={()=>props.onDecrement(props.counter)} className='btn btn-sm btn-secondary mx-2' >
            Decrement
        </button>
        <button onClick={()=>props.onDelete(props.counter.id)} className='btn btn-sm btn-danger mx-2'>Delete</button>
    </>
  )
}

export default Counter;