import React from "react";
import { Link } from "react-router-dom";
import Cartwidget from "./Cartwidget";
import logo from "./images/Burger-King-Logo-CMS.png";


function Header(){
    return(
        <div className="container fondo-amarillo">
            <ul className="nav d-flex align-items-center p-3">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#"><img src={logo} width="48px" alt= "burguer"/></Link>
        </li>
        <li className="nav-item">
        <Link to={"/productos"} className="nav-link" href="#">Menu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Promo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Novedades</Link>
        </li>
        
        <Cartwidget />
      </ul>
      </div>
    )
}

export default Header;