import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "./card.css"
export function Card(){
    return(
        <>
        <div className="container-fluid bg-primary ">
            
            <div className="text-center pt-5">
            <h1>Learn 4.0 Technologies</h1>
            <p>Get started by alumni of IT and top companies like Amazon, Microsoft, Intel,<br/>
                Nividia, Qualcomm,etc. Learn directly from professionals involved in product<br/>
                development</p>
            </div>
            <div className="d-flex m-5 justify-content-center row" >
            <div className="bor m-4 bg-white p-3 rounded col-lg-5">
                <h1>Data scientist</h1>
                <p>Data scientist gather and analyze large<br/>
                    sets of data to help inform business decisions.</p>
                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/44191/man-scientist-emoji-clipart-xl.png"className="pict m-5"/>
            </div>
            
            <div className="bor1 m-4 bg-white p-3 rounded col-lg-5">
                <h1>IOT Developer</h1>
                <p>IOT Developers are professional who can<br/>
                    develop,Manage and monitor IOT devices.</p>
                <img src="https://epnovate.com/wp-content/uploads/2020/08/iot-app-development-vector.png"className="pict m-5"/>
            </div>
            </div>
            <div className="d-flex m-5 justify-content-center pb-5 row">
            <div className="bor2 m-4 bg-white p-3 rounded col-lg-5">
                <h1>VR Developer</h1>
                <p>A VR developer creates completely now<br/>
                    digital environments that people can see.</p>
                <img src="https://images.emojiterra.com/twitter/v14.0/512px/1f468-1f4bb.png" className="pict m-5"/>
            </div>
            <div className="bor3 m-4 bg-white p-3 rounded col-lg-5">
                <h1>ML Engineer</h1>
                <p>Machiner learning engineers feed data information<br/>
                    models defined bt data scientists.</p>
                <img src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/share/1f9d1-1f4bb.jpg" className="pict m-5"/>
            </div>
            </div>
        </div>
        
        </>
    )
}