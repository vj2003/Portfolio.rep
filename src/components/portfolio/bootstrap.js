import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import boot1 from "./boot1.png"
import boot2 from "./boot2.png"
import boot3 from "./boot3.png"
import boot4 from "./boot4.png"
import boot5 from "./boot5.png"
import boot6 from "./boot6.png"
import "./port.css"
export function Bootstrap() {
    return (
        <>
            <div>
                <li classNameName="navitem">
                    <Link to="/Skills" className="p-3"><a className="linktext3"><FontAwesomeIcon icon={faBackwardStep} size="2xl" /></a></Link>
                </li>
            </div>
            <div className="row skillcss mt-4">
                <div className="card col-lg-5 m-3">
                    <img className="card-img-top p-3" src={boot1} alt="Card image cap" />
                </div>
                <div className="card col-lg-5 m-3">
                    <img className="card-img-top p-3" src={boot2} alt="Card image cap" />
                </div>
                <div className="card card col-lg-5 m-3">
                    <img className="card-img-top p-3" src={boot3} alt="Card image cap" />
                </div>
                <div className="card card col-lg-5 m-3">
                    <img className="card-img-top p-3" src={boot4} alt="Card image cap" />
                </div>
                <div className="card card col-lg-5 m-3">
                    <img className="card-img-top p-3" src={boot5} alt="Card image cap" />
                </div>
                <div className="card card col-lg-5 m-3">
                    <img className="card-img-top p-3" src={boot6} alt="Card image cap" />
                </div>
                
            </div>

        </>
    )
}