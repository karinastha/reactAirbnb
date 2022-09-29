import React from "react";
import Logo from "../images/airlogo.png";

export default function Navbar() {
    return (
        <nav>
            <img src={Logo} alt="Logo" className="nav--logo" />
        </nav>

    )
}