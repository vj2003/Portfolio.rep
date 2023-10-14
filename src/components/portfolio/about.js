import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import me  from "./me.jpg"
import "./port.css"
export function About(){
    return(
        <>
        <div className="row" id="/About">
        <div className="col-lg-6">
        <h1 className="abthead">About</h1>
        <h3 className="container abtpara">As a highly passionate and dedicated Front-End<br/>Developer based in Coimbatore, India, my<br/>objective is to utilize my expertise in Front-End<br/>and Graphic design tools to build premium and<br/>visually appealing websites. Additionally, my<br/>skills in Marketing, Retail, and Hospitality<br/>sectors can be leveraged to create innovative<br/>and effective digital solutions for businesses in<br/>these industries. Ultimately, I strive to create<br/>impactful and user-friendly websites that drive<br/>business growth and success.</h3>
        <a href="https://app.luminpdf.com/viewer/652a72d8f5a5b185d596f8b0"><button class="btn btn1 mt-3">DOWNLOAD RESUME <FontAwesomeIcon icon={faFileDownload} bounce /></button></a>
        </div>
        <div className="col-lg-4">
            <img src={me} className="rounded-circle container-fluid"/>
        </div>
        </div>
        </>
    )
}