import React from "react";
import Cartwidget from "./Cartwidget";
import logo from "./images/Burger-King-Logo-CMS.png";

function Header(){
    return(
        <div className="container fondo-amarillo">
            <ul className="nav d-flex align-items-center p-3">
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
        <Cartwidget />
      </ul>
      </div>
    )
}

export default Header;