import React from "react";
import logo from "./images/Burger-King-Logo-CMS.png";

function Header(){
    return(
        <div className="container fondo-amarillo">
            <ul className="nav d-flex align-items-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"><img src={logo} width="48px" alt= "burguer"/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pedi tu combo</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Promo</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Novedades</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Delivery</a>
        </li>
      </ul>
      </div>
    )
}

export default Header;