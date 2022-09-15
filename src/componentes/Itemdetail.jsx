import React from "react";
import Itemcount from "./Itemcount";

const Itemdetail = ({item}) =>{
    return(
         <div className="detail">
            <img className="img-detail" src={item.imagen} alt={item.nombre} />
            <div className="info">
            <h2>{item.nombre} </h2>
            <p>{item.descripcion}</p>
            <h3>${item.precio}</h3>
            <Itemcount stock={5} initial={1} onadd={0}/>
            </div>

         </div>

        
    )
}
export default Itemdetail;