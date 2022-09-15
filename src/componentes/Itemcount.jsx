import React from "react";
import { useState } from "react";
import Item from "./Item";

const Itemcount = ({stock, initial, onadd}) =>{
    const [cantidad, setCantidad]= useState(initial);
    const [Itemstock, setItemstock]= useState(stock);
    const [Itemadd, setOnadd]= useState(onadd);

    const RestarCantidad = (valor) =>{
        if(valor > 0){
            setCantidad(valor);
        }
        

    }
    const SumarCantidad = (valor) => {
        if(valor <= Itemstock){
            setCantidad(valor);
        }

    }
    const Agregaralcarrito = () =>{
        if(cantidad <= Itemstock){
            setItemstock(Itemstock-cantidad)
            setOnadd(Itemadd+cantidad)
        }

    }

    return(
        <div className="container py-3">
         <div className="row">
        <div className="col-md-4">
            <h5>{}</h5>
        <div className="input-group">
        <input type="button" className="btn btn-secondary" value="-" onClick={()=> {RestarCantidad(cantidad -1)}}/>
         <input type="text" className="form-control" value={cantidad} onChange={()=> {}} />
         <input type="button" className="btn btn-secondary" value="+" onClick={()=> {SumarCantidad(cantidad +1)}}/>
  </div>
  <div className="d-grid gap-2 pt-2">
  <input type="button" className="btn btn-danger" value="Agregar al carrito" onClick={()=> {Agregaralcarrito()}}/>
  </div>
  <h6>Productos seleccionados: {Itemadd}</h6>
  </div>
  </div>
  
  </div>

    )
    
};

export default Itemcount;