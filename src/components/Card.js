import React from "react";
import Img1 from "../images/img2.jpg";

export default function Card() {
    return (
        <div className="card">
            <img src={Img1} className="card--image" />
            <img src={Img1} className="card--image" />
            <img src={Img1} className="card--image" />
            <img src={Img1} className="card--image" />
            <img src={Img1} className="card--image" />
            <img src={Img1} className="card--image" />
            <img src={Img1} className="card--image" />
            <div className="cards--stats"></div>
        </div>
    )
}