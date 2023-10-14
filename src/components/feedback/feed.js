import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear,faFaceLaughBeam } from "@fortawesome/free-solid-svg-icons"
import { faFaceSmileBeam } from "@fortawesome/free-regular-svg-icons"
import "./feedback.css"
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export function Feed(){
    return(
        <>
        <div className="feedback container justify-content-center mt-5 p-5">
            <h3 className="ps-4">How satisfied are you with our customer support perfomance</h3>
            <div className=" d-flex justify-content-around m-5"> 
            <Link to="/thankpage"><FontAwesomeIcon icon={faFaceSadTear} id="font" className="me-3"/></Link>
            <Link to="/thankpage"><FontAwesomeIcon icon={faFaceSmileBeam} id="font" className="me-3"/></Link>
            <Link to="/thankpage"><FontAwesomeIcon icon={faFaceLaughBeam} id="font" className="me-3"/></Link>
            </div>
        </div>

   </>
)
}
