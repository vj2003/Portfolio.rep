import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './port.css';
export function Education(){
    return(
        <>
        <div className="proeducationdiv  d-flex flex-wrap justify-content-center p-5" id="/Education">
           <div className="col-lg-8 row justify-content-center text-light text-center proeduhead p-3">
           <h1 className="eduhead">EDUCATION DETAILS</h1>
           </div>
            <div className="col-lg-8 row justify-content-center text-dark proedu bg-light p-3 mt-5">
                <div className="col-lg-4">
                    <img src="https://cdn-icons-png.flaticon.com/512/4860/4860861.png" className="rounded-circle container-fluid"/>
                </div>
                <div className="col-lg-7">
                    <h2 className="fw-bold text-secondary">Bachelor of Business Administration</h2>
                    <h4>Bishop Heber College, Trichy</h4>
                    <h5>Percentage-78%</h5>
                </div>
            </div>
            <div className="col-lg-8 row justify-content-center text-dark bg-light proedu p-3 mt-5">
                <div className="col-lg-4">
                    <img src="https://cdn-icons-png.flaticon.com/512/4860/4860759.png" className="rounded-circle container-fluid"/>
                </div>
                <div className="col-lg-7">
                    <h2 className="fw-bold text-secondary">Higher Secondary School</h2>
                    <h4>Sri Jayendra Matriculation Higher Secondary School</h4>
                    <h5>Percentage-63.5%</h5>
                </div>
            </div>
            <div className="col-lg-8 row justify-content-center text-dark bg-light proedu p-3 mt-5">
                <div className="col-lg-4">
                    <img src="https://cdn-icons-png.flaticon.com/512/4860/4860819.png" className="rounded-circle container-fluid"/>
                </div>
                
                <div className="col-lg-7">
                    <h2 className="fw-bold text-secondary">SSLC</h2>
                    <h4>Sri Jayendra Matriculation Higher Secondary School</h4>
                    <h5>Percentage-78.2%</h5>
                </div>
            </div>

        </div>
        </>
    );
}
