import React, { useState, useContext } from "react";
import { CartContext } from "./Context";
import { getFirestore, collection, addDoc, } from "firebase/firestore";




    const Checkout = ()=>{
    const {cart, clear, cartTotal, cartSuma} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const [direccion, setDireccion] = useState("");

    const sendOrder = () => {
        if ((nombre !== "") && (email !== "") && (telefono !== "")) {
           
            const buyer = {name:nombre, email:email, phone:telefono, direction:direccion};
            
            const items = [];
            cart.forEach(item => { 
                items.push({id:item.id, title:item.nombre, price:item.precio, quantity:item.cantidad});
            });
            
           
            const order = {buyer:buyer, items:items,  };
            
           
            const db = getFirestore();
            const orderCollection =  collection(db, "orders");
            addDoc(orderCollection, order).then(({id}) => {
                setOrderId(id);
                clear();
            });
        }
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-4 offset-md-2">
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" onInput={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" onInput={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="telefono" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" id="telefono" onInput={(e) => setTelefono(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Dirección</label>
                            <input type="text" className="form-control" id="direccion" onInput={(e) => setDireccion(e.target.value)} />
                        </div>
                        <button type="button" className="btn btn-danger" onClick={() => {sendOrder()}}>Generar Orden</button>
                </div>
                </div>
                </div>
    )

    }
     

export default Checkout;