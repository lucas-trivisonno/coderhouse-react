import React from "react";


const Item = ({nombre, imagen , precio}) =>{
    return(
         <div className="card fondo-amarillo">
     <img src={imagen} className="card-img-top" alt={nombre} />
     <div className="card-body">
     <h3 className="card-title text-center">{nombre}</h3>
      <p className="card-text text-center"><b>${precio}</b></p>
    </div>
    </div>

        
    )
}
export default Item;