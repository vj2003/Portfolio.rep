import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faCertificate,faSchool,faFlask,faUserTie,faToolbox,} from '@fortawesome/free-solid-svg-icons';
import { faAddressCard,faIdBadge } from "@fortawesome/free-regular-svg-icons";
import "./port.css"
export function Portfolio(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <h4 className="vj ps-4 pt-2"><a className="text-secondary"><FontAwesomeIcon icon={faUserTie} /></a> VJ</h4>
                <div className="collapse navbar-collapse navi" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 porttext2">
                <li className="navitem1">
                    <Link to="/home" className="p-2"><FontAwesomeIcon icon={faHouse} size="lg" className="text-secondary" /><a className="linktext3"> Home</a></Link>
                    </li>
                    <li className="navitem1">
                    <Link to="/About" className="p-2"><a className="text-secondary"><FontAwesomeIcon icon={faAddressCard} size="lg" className="text-secondary" /></a><a className="linktext3"> About</a></Link>
                    </li>
                    <li className="navitem1">
                    <Link to="/Certifications" className="p-2"><a className="text-secondary"><FontAwesomeIcon icon={faCertificate}size="lg"className="text-secondary" /></a><a className="linktext3"> Certifications</a></Link>
                    </li>
                    <li className="navitem1">
                    <Link to="/Education" className="p-2"><a className="text-secondary"><FontAwesomeIcon icon={faSchool}size="lg"className="text-secondary" /></a><a className="linktext3"> Education</a></Link>
                    </li>
                    <li className="navitem1">
                    <Link to="/Project" className="p-2"><a className="text-secondary"><FontAwesomeIcon icon={faToolbox}size="lg" className="text-secondary"/></a><a className="linktext3"> Project</a></Link>
                    </li>
                    <li className="navitem1">
                    <Link to="/Skills" className="p-2"><a className="text-secondary"><FontAwesomeIcon icon={faFlask}size="lg" className="text-secondary"/></a><a className="linktext3"> Skills</a></Link>
                    </li>
                    <li className="navitem1">
                    <Link to="/Contact" className="p-2"><a className="text-secondary"><FontAwesomeIcon icon={faIdBadge}size="lg" /></a><a className="linktext3"> Contact</a></Link>
                    </li>
                </ul>   
                </div>
            </div>
        </nav>

        )

}