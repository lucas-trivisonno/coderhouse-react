import React, { useContext, useState } from "react";
import Itemcount from "./Itemcount";
import {CartContext} from "./Context";

const Itemdetail = ({item}) => {
    const {addItem} = useContext(CartContext);
    const [counter, setCounter] = useState(0);
    
    const onAdd = (item, counter) => {
        setCounter(counter);
        addItem(item, counter);
    }


    return(
         <div className="detail">
            <img className="img-detail" src={item.imagen} alt={item.nombre} />
            <div className="info">
            <h2>{item.nombre} </h2>
            <p>{item.descripcion}</p>
            <h3>${item.precio}</h3>
            <Itemcount initial={1} stock={item.stock} onAdd={onAdd} counter={counter} setCounter={setCounter} item={item}/>
            </div>

         </div>

        
    )
}
export default Itemdetail;