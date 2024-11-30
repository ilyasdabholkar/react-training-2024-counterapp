import React, { useEffect, useState } from 'react'

function ScreenComponent() {

    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",handleResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize",handleResize);
            console.log("EVENT LISTENER Removed");
        }
    },[])

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

  return (
    <div>
        <h4>Window Width : {width}</h4>
        <h4>Window Height : {height}</h4>
    </div>
  )
}

export default ScreenComponent