import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardStep,faHandPeace,faHandshake,faBaseballBatBall,faEarthAmericas,faRightToBracket,faFaceGrinWink,faVrCardboard,faCalculator,faBagShopping,faCalendarDays,faBasketShopping} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
export function Reuse(){
    return(
       
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-3 mb-lg-0">
                <li className="navitem">
                    <Link to="/" className="p-3"><a className="linktext3"><FontAwesomeIcon icon={faBackwardStep} size="xl" /></a></Link>
                    </li>
                <li className="navitem">
                    <Link to="/Hello" className="ps-3"><a className="text-secondary fonttext3"><FontAwesomeIcon icon={faHandPeace} /></a><a className="linktext3"> Hello</a></Link>
                    </li>
                    <li className="navitem">
                    <Link to="/Congratstask" className="ps-3"><a className="text-secondary"><FontAwesomeIcon icon={faHandshake}/></a><a className="linktext3"> Congrats task</a></Link>
                    </li>
                    <li className="navitem">
                    <Link to="/Superover" className="ps-3"><a className="text-secondary"><FontAwesomeIcon icon={faBaseballBatBall}/></a><a className="linktext3"> Superover</a></Link>
                    </li>
                    <li className="navitem">
                    <Link to="/Social" className="ps-3"><a className="text-secondary"><FontAwesomeIcon icon={faEarthAmericas} /></a><a></a><a className="linktext3"> Social</a></Link>
                    </li>
                    <li className="navitem">
                    <Link to="/Notification" className="ps-3"><a className="text-secondary"><FontAwesomeIcon icon={faBell} /></a><a className="linktext3"> Notification</a></Link>
                    </li>
                    <li className="navitem">
                    <Link to="/Login" className="ps-3"><a className="text-secondary"><FontAwesomeIcon icon={faRightToBracket} /></a><a className="linktext3"> Login</a></Link>
                    </li>
                    <li className="navitem">
                    <Link to="/Card" className="ps-3"><a className="text-secondary"><FontAwesomeIcon icon={faVrCardboard} /></a><a className="linktext3"> Card</a></Link>
                    </li>
                    <li className="navitem">
                    <Link to="/Feed" className="ps-3"><a className="text-secondary"><FontAwesomeIcon icon={faFaceGrinWink} /></a> <a className="linktext3">Feed</a></Link>
                    </li>
                    <li className="navitem">
                    <Link to="/Hooks" className="ps-3"><a className="text-secondary"><FontAwesomeIcon icon={faCalculator} /></a> <a className="linktext3">Hooks</a></Link>
                    </li>
                    <li className="navitem">
                    <Link to="/Fruits" className="ps-3"><a className="text-secondary"><FontAwesomeIcon icon={faBasketShopping} /></a><a className="linktext3"> Fruits</a></Link>
                    </li>
                    <li className="navitem">
                    <Link to="/Datefunction" className="ps-3"><a className="text-secondary"><FontAwesomeIcon icon={faCalendarDays} /></a><a className="linktext3"> Date</a></Link>
                    </li>
                    <li className="navitem">
                    <Link to="/Jsondata" className="ps-3"><a className="text-secondary"><FontAwesomeIcon icon={faBagShopping} /></a><a className="linktext3"> Json</a></Link>
                    </li>
                    <li className="navitem">
                    <Link to="/Product" className="ps-3"><a className="text-secondary"><FontAwesomeIcon icon={faBagShopping} /></a><a className="linktext3"> Product Details</a></Link>
                    </li>
                </ul>   
                </div>
            </div>
        </nav>

        
        )

        }
    
