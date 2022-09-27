import React, { useContext, useState } from "react";
import Itemcount from "./Itemcount";
import {CartContext} from "./Context";
import { Link } from "react-router-dom";

const Itemdetail = ({item}) => {
    const {addItem} = useContext(CartContext);
    const [counter, setCounter] = useState(0);
    
    const onAdd = (cantidad) => {
        setCounter(cantidad);
        addItem(item, cantidad);
    }


    return(
         <div className="detail">
            <img className="img-detail" src={item.imagen} alt={item.nombre} />
            <div className="info">
            <h2>{item.nombre} </h2>
            <p>{item.descripcion}</p>
            <h3>${item.precio}</h3>
            {counter === 0 ? (
                    <Itemcount stock={5} initial={1} onAdd={onAdd} />
                ) : (
                    <Link to="/cart" className="btn btn-danger">Ir al carrito</Link>
                )}
            </div>

         </div>

        
    )
}
export default Itemdetail;