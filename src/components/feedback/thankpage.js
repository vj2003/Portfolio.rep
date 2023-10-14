import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart } from "@fortawesome/free-solid-svg-icons"
import "./feedback.css"
import "bootstrap/dist/css/bootstrap.css";

export function Thankpage(){
    return(
        <>
        <div className="feedback container justify-content-center mt-5 p-5 text-center">
            
            <div className="d-flex justify-content-around"> 
            <FontAwesomeIcon icon={faHeart} id="heart" className="text-danger" />
            </div>
            <h2>Thankyou....!</h2>
            <p className="">we will use your feedback to improve your customer support<br/>performance</p>
        </div>

        </>
    )
}
