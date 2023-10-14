import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "./fruits.css"
export function Fruits(){
    const [count , setCount] = useState (0);
    const [banana ,setbanana] = useState (0);
    return(
        <> 
        <div className="container-fluid bg-warning">
          <div className="p-5">
          <h1 className="text-center col-lg-10 col-sm-12 col-md-12 m-4">vj ate {count} Mangos {banana} Banana </h1>
                <div className="d-flex flex-wrap p-2 text-center">
                <div className="col-lg-4 col-sm-12 col-md-12">
                    <img src="https://thumbs.dreamstime.com/b/happy-smiling-mango-cartoon-generative-ai-happy-mango-cartoon-character-white-background-generative-ai-272583033.jpg" className="pic1 mt-2"/><br/>
                    <button onClick={()=>{setCount(count+1)}} className="btn btn-danger m-4 ms-5 ">Eat mango</button>
                </div>
                <div className="col-lg-7 col-sm-12 col-md-12">
                    <img src="https://static.vecteezy.com/system/resources/previews/006/233/685/original/smiling-banana-cartoon-character-illustration-isolated-on-white-background-free-vector.jpg" className="pic2 pt-1"/><br/>
                    <button onClick={ () => {setbanana(banana +2) }}className ="btn btn-primary mt-3 ms-5 ">eat banana </button>
                </div>
                </div>
            </div>
            </div>
        </>

    )
}