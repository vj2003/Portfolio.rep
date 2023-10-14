import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "./login.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faEnvelope,faLock,faArrowRight } from "@fortawesome/free-solid-svg-icons"
export function Login() {
    return (
        <>
            <div className="back container-fluid p-5">
                <div className="all d-flex flex-wrap bg-white p-2">
                <div className=" col-lg-5 col-sm-12 col-md-12 col-12">
                    <img src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2022/07/laptop.jpg" className="picture ms-5 mt-5" />
                </div>
                <div className=" col-lg-5 col-md-12 col-sm-12 ">
                    <h1>Member Login</h1>
                    <div className="p-2  col-lg-5 col-md-12">
                        <div className="one">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <input type="email" placeholder="   Email" className="inp" />
                        </div>
                        <div className="two mt-5"> 
                        <FontAwesomeIcon icon={faLock} className="ps-3" />
                        <input type="Password" placeholder="   type Password" className="inp"/>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <button className="but btn mt-5">Login</button>
                    </div>
                    <div className="mt-5 ms-5 col-lg-5 col-md-12">
                        <p>Forgot <a href="#"> Username / Password?</a></p>
                    </div>
                    <div className="three ms-5 mt-4 mb-4 col-lg-5 col-md-12">
                        <p>Create your account <FontAwesomeIcon icon={faArrowRight}/></p>
                    </div>
                    </div>
                </div>
            
            </div>
        </>)
}