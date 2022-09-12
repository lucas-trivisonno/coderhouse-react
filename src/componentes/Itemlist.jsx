import React from "react";
import Item from "./Item";


const Itemlist = ({items}) =>{
    return(
         <div className="row">
             {items.map(item => (
              <div key ={item.id} className="col-md-4 py-3">
                <Item  nombre={item.nombre} imagen= {item.imagen} precio={item.precio} />
              </div>)
             )}  
            </div>
        
    )
}
export default Itemlist;