import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import "./json.css"

export function Jsondata() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(viewdata => setData(viewdata))
    })
    return (
        <>
        <div className="row col-lg-12">
            {
                data.map((value, index) => (
                    <div class="card col-lg-3 m-5 text-center p-3">
                        <img src={value.image}alt="..."  className="phot h-10 w-25 mx-auto"/>
                        <div class="card-body bg-secondary mt-3">
                            <h5 class="card-title"className="text-white" >{value.title}</h5>
                            <p class="card-text" className="fw-bolder">{value.category}</p>
                            <p class="card-text" className="fw-bolder">${value.price}</p>
                            <StarRatings rating={value.rating.rate} starRatedColor="gold" starDimension="30px"/>
                            <a href="#" class="btn btn-success mt-3">view</a>
                        </div>
                    </div>
                ))
            }
            </div>
        </>
    )
}