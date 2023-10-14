import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './port.css';
import me  from "./me.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export function Contact() {
    return (
        <>
            <div className="procontactdiv" id="/Contact">
                <div className="promapdiv container">
                    <div className="row ">
                    <div className="promap  col-lg-6 ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.789210148535!2d78.70161997373641!3d10.82743705825342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf45293df621f%3A0x4639c109686a5e68!2s3%2F12%2C%20John%20Thoppu%2C%20EX.%20Bharathiyar%204th%20street%2C%20Devathanam%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20620008!5e0!3m2!1sen!2sin!4v1697251045252!5m2!1sen!2sin" width="300" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="mt-5"></iframe>
                    </div>
                    </div>
                   
                    <div className=" container row text-light  mx-auto">
                        <div className="row  profooterdiv ">
                            <div className="col-lg-3 mt-2 p-5">
                                <h1>Address</h1>
                                <p>3/12,Johnthoppu,<br/>EX.Bharathiyar 4th street,Trichy</p>
                            </div>
                            <div className="col-lg-3 mt-2 p-5">
                                <h1>Contact</h1>
                                <p>+91-9597339519</p>
                            </div>
                            <div className="col-lg-3 mt-2 p-5">
                                <h1>E-mail</h1>
                                <p>vjragavan0001@gmail.com</p>
                            </div>
                            <div className="col-lg-3 prolinkdiv  ">
                                <a href="https://github.com/vj2003"><FontAwesomeIcon icon={faGithub} size="2xl" className="m-2 mt-5 emote" /></a>
                                <a href="https://www.linkedin.com/in/vijayaragavan-r-2b32a3255/"><FontAwesomeIcon icon={faLinkedin} size="2xl" className="m-2 mt-5 emote" /></a>
                                <a href="tel:9597339519"><FontAwesomeIcon icon={faPhone} size="2xl" className="m-2 mt-5 emote" /></a>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
