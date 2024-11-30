
import React, { useEffect, useState } from 'react'

function MyComponent() {
    const [count,setCount] = useState(0);
    const [color,setColor] = useState('green');

    //Runs on every render
    // useEffect(()=>{
    //     document.title = `Count : ${count} - ${color}`;
    // });

    //Runs only once when component mounts
    // useEffect(()=>{
    //     document.title = `Count : ${count} - ${color}`;
    // },[]);

    //Runs only when the dependent state changes
    useEffect(()=>{
        document.title = `Count : ${count} - ${color}`;
    },[count,color]);

    function addCount(){
        setCount(c => c+1);
    }

    function changeColour(){
        setColor(c => c == "green" ? "red" : "green");
    }

  return (
    <>
        <h4 style={{color:color}}>Count : {count}</h4>
        <button onClick={addCount}>Add</button>
        <button onClick={changeColour}>Change Colour</button>
    </>
  )
}

export default MyComponent;