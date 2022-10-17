import React from "react";
import Logo from "../images/airlogo.png";

export default function Star(props) {
    const starIcon = contact.isFavourite ? "star-filled.png" : "star--empty.png"
    return (
        <div className="">
            <img
                src={`../images/${starIcon}`}
                className="card--favourite"
                onClick={toggleFavourite}
            />
        </div>
    )
}