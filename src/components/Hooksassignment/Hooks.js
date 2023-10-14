import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
export function Hooks(){
    // const[variable,setvariable]=useState(ini-value)
    const [count , setCount] = useState (0);
    return(
        <>
        <div className="text-center bg-primary mt-5">
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count-1)}} className="btn btn-danger m-4">-</button>
        <button onClick={()=>{setCount(count*0)}} className="btn btn-warning m-4">Reset</button>
        <button onClick={()=>{setCount(count+1)}} className="btn btn-success m-4">+</button>
        </div>
        
        </>
    )
}