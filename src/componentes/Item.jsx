import React from "react";
import { Link } from "react-router-dom";


const Item = ({item}) =>{
    return(
         <div className="card fondo-amarillo">
         <Link to={"/producto/"+ item.id}><img src={item.imagen} className="card-img-top" alt={item.nombre} /></Link>
     
     <div className="card-body">
     <h3 className="card-title text-center">{item.nombre}</h3>
      <p className="card-text text-center"><b>${item.precio}</b></p>
    </div>
    </div>

        
    )
}
export default Item;