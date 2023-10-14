import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle"
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
export function Product() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(viewdata => setData(viewdata))
    })
    return (
        <>
            <div className="container-fluid row justify-content-center">
                {
                    data.map((value, index) => (
                        <>
                            <div class="card col-lg-3 m-3 text-center p-3" >
                                <img src={value.image} class="card-img-top mx-auto w-50 " alt="..."/>
                                    <div class="card-body bg-secondary mt-3">
                                    <Link to={`/details/${value.id}`}><h5 class="card-title" className="text-white">{value.title}</h5></Link>
                                    <Link to={`/details/${value.id}`} ><p class="card-text" className="fw-bolder"> price $: {value.price}</p></Link>
                                    <StarRatings rating={value.rating.rate} starDimension="30px" starSpacing="2px" starRatedColor="gold"/>
                                    <br/>
                                        <Link to={`/details/${value.id}`} class="btn btn-success mt-3">view</Link>
                                    </div>
                            </div>
                        </>

                    ))
                }

            </div>

        </>
    );
}
