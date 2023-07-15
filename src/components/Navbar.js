import React from "react";
import logo from "./red_logo-removebg-preview.png";
import './Navbar.css';


const Navbar = ()=>{
    return(
        <div>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item"> <a href="/"><img src= {logo} alt="Logo" className="navbar-logo" /></a> </li>
                    <li className="navbar-item"><a href="/"> INICIO </a></li>
                    <li className="navbar-item"><a href="/"> NUESTROS AUTOS </a></li>
                    <li className="navbar-item"><a href="/"> COTIZA EL TUYO </a></li>
                    <li className="navbar-item"><a href="/"> CONTACTO </a></li>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;