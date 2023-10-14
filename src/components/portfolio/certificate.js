import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./port.css"
import courserahtml from "./Courserahtml.jpg"
import courseracss from "./Courseracss.jpg"
import courserafrontend from "./courserafrontend.jpg"
export function Certifications() {
    return (
        <>
            <div className="bground d-flex flex-wrap justify-content-center" id="/Certifications">
                <div className="col-lg-12 row justify-content-center text-center proeduhead m-5">
                    <h1> Certification</h1>
                </div>
                <div className="col-lg-3 row justify-content-center text-dark  bg-light procer  m-5">
                    <div className="col-12">
                        <img src={courserahtml} className="container-fluid procerimage" />
                    </div>
                    <div className="col-12 bg-dark text-light bor ">
                        <h3 className="pt-4">Introduction to HTML</h3>
                        <p>HTML from UNIVERSITY of MICHIGAN</p>
                        
                    </div>
                </div>

                <div className="col-lg-3 row justify-content-center text-dark  bg-light procer1  m-5">
                    <div className="col-12">
                        <img src={courseracss} className="container-fluid procerimage" />
                    </div>
                    <div className="col-12 bg-dark text-light bor ">
                        <h3 className="pt-3">CSS</h3>
                        <p>CSS Certifate from UNIVERSITY of MICHIGAN</p>
                    </div>
                </div>
                <div className="col-lg-3 row justify-content-center text-dark  bg-light procer2  m-5">
                    <div className="col-12">
                        <img src={courserafrontend} className="container-fluid procerimage" />
                    </div>
                    <div className="col-12 bg-dark text-light bor">
                        <h3 className="pt-3">Introduction to Front-End Development</h3>
                        <p>Front-End Development Certifate from Meta</p>
                    </div>
                </div>
            </div>
        </>
    );
}