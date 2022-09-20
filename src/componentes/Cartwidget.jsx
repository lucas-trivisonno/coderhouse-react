import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Carrito from "./images/carrito.png"
import {CartContext} from "./Context";
import { useState } from "react";
import { useEffect } from "react";

const CartWidget = () => {
    const {cart} = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let total_items = cart.reduce((total, item) => total+=item.cantidad, 0);
        setTotal(total_items);
    }, [cart]);

    return (
        
            <li className="cart">
          <Link to={"/cart"} className="nav-link active" aria-current="page" href="#"><img src={Carrito} width="30px" alt= "cart"/></Link>
        </li>
        
    )
}

export default CartWidget;
