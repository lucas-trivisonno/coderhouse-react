import React from "react";
import Carrito from "./images/carrito.png";


function Cartwidget(){
    return(
        <li className="cart">
          <a className="nav-link active" aria-current="page" href="#"><img src={Carrito} width="30px" alt= "cart"/></a>
        </li>
    );
}

export default Cartwidget;