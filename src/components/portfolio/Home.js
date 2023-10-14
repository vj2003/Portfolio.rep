import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { Link } from "react-router-dom";
import "./port.css"
import { useTypewriter } from "react-simple-typewriter";
export default function Homes(){
    const[autotyp]=useTypewriter({
        words: ["VIJAYARAGAVAN" , "Web Developer"],
        loop : {},
        backspeed: 70
    })
    return(
        <>
        <div className="homebground" id="/home">
        <div className="pt-5 col-lg-12">
        <h3 className="hometex1 text-dark ps-5 pb-5">I am <span className="homename text-center"><br/><br/>{autotyp}</span></h3>
        </div>
        </div>
        
        </>
    )
}