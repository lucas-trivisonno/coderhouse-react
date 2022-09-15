import React from "react";
import { Link } from "react-router-dom";


const Item = ({id, nombre, imagen , precio}) =>{
    return(
         <div className="card fondo-amarillo">
         <Link to={"/item/"+ id}><img src={imagen} className="card-img-top" alt={nombre} /></Link>
     
     <div className="card-body">
     <h3 className="card-title text-center">{nombre}</h3>
      <p className="card-text text-center"><b>${precio}</b></p>
    </div>
    </div>

        
    )
}
export default Item;