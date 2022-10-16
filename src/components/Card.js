import React from "react";
import Img1 from "../images/img2.jpg";
import Star from "../images/sstar.png";

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <section className="box">
            <div className="card">
                {props.openSpots === 0 && <div className="card--badge"> SOLD OUT </div>}
                <img src={props.img} className="card--image" />
                <div className="card--stats">
                    <img src={Star} className="stars" />
                    <span > {props.rating}</span>
                    <span className="gray"> ({props.reviewCount}) .</span>
                    <span className="gray"> {props.country} </span>

                </div>
                <p > {props.title}</p>
                <p ><span className="bold"> From {props.price} /</span> persons </p>

            </div>
        </section>
    )
}