
import React, { useState } from 'react'
import Counter from './Counter'

function Counters(props) {
  return (
    <div className='container text-center'>
        <button onClick={props.onReset} className='btn btn-sm btn-primary my-2'>Reset</button>
        {props.counters.map((counter)=>(
            <Counter 
                key={counter.id} 
                counter={counter} 
                onDelete={props.onDelete} 
                onIncrement={props.onIncrement}
                onDecrement={props.onDecrement}
                > 
                <h4>Counter #{counter.id}</h4>
            </Counter>
        ))}   
    </div>
  )
}

export default Counters