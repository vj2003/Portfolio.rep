import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import css1 from "./css1.png"
import css2 from "./css2.png"
import css3 from "./css3.png"
import css4 from "./css4.png"
import css5 from "./css5.png"
import css6 from "./css6.png"
import css7 from "./css7.png"
import css8 from "./css8.png"
import "./port.css"
export function Css() {
    return (
        <>
            <div>
                <li classNameName="navitem">
                    <Link to="/Skills" className="p-3"><a className="linktext3"><FontAwesomeIcon icon={faBackwardStep} size="2xl" /></a></Link>
                </li>
            </div>
            <div className="row skillcss">
                <div className="card col-lg-5 m-3">
                    <img className="card-img-top p-3" src={css1} alt="Card image cap" />
                </div>
                <div className="card col-lg-5 m-3">
                    <img className="card-img-top p-3" src={css2} alt="Card image cap" />
                </div>
                <div className="card card col-lg-5 m-3">
                    <img className="card-img-top p-3" src={css3} alt="Card image cap" />
                </div>
                <div className="card card col-lg-5 m-3">
                    <img className="card-img-top p-3" src={css4} alt="Card image cap" />
                </div>
                <div className="card card col-lg-5 m-3">
                    <img className="card-img-top p-3" src={css5} alt="Card image cap" />
                </div>
                <div className="card card col-lg-5 m-3">
                    <img className="card-img-top p-3" src={css6} alt="Card image cap" />
                </div>
                <div className="card card col-lg-5 m-3">
                    <img className="card-img-top p-3" src={css7} alt="Card image cap" />
                </div>
                <div className="card card col-lg-5 m-5">
                    <img className="card-img-top p-3" src={css8} alt="Card image cap" />
                </div>
                
            </div>

        </>
    )
}