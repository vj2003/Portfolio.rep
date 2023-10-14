import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { useParams } from "react-router-dom";
export function Details() {
    const [Details, setDetail] = useState([])
    var {id}=useParams()
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/"+id)
            .then(res => res.json())
            .then(viewdetail => setDetail(viewdetail))
    })
    return(
        <>
            <div className="container-fluid row">
                <div className="col-lg-6">
                    <img src={Details.image} className="container-fluid"/>
                </div>
                <div className="col-lg-6">
                    <h1 className="mt-5 fs-4"><a className="text-danger"> Product Title: </a>{Details.title}</h1>
                    <br/>
                    <h2 className="fs-4"><a className="text-success">Category:</a> {Details.category}</h2>
                    <br/>
                    <h2 className="fs-5"> <a className="text-danger">Description:</a> {Details.description}</h2>
                    <br/>
                    <h2 className="fs-4"><a className="text-success"> price :</a> ${Details.price}</h2><br/>
                </div>
            </div>
        </>
    );
}
