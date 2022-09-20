import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {CartContext} from "./Context";

const Itemcount = (props) => {
    const {item} = props;
    const {cart, setCart, addItem} = useContext(CartContext);
    const [counter, setCounter] = useState(props.initial);
    const [itemStock, setItemStock] = useState(5);

    const decrementarCantidad = (valor) => {
        if (valor > 0) {
            setCounter(valor);
        }
    }

    const incrementarCantidad = (valor) => {
        if (valor <= itemStock) {
            setCounter(valor);
        }
    }

    const agregarProductos = () => {
        if (counter <= itemStock) {
            addItem(item, counter);
            setItemStock(itemStock - counter);
        }   
    }
    const finalizarCompra = () => {
        
    }

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <p><input type="button" className="btn btn-danger ml-5" value="-" onClick={() => {decrementarCantidad(counter - 1)}} /> {counter} <input type="button" className="btn btn-danger mr-3" value="+" onClick={() => {incrementarCantidad(counter + 1)}} /></p>
                <p><input type="button" className="btn btn-danger" value="Agregar" onClick={() => {agregarProductos()}} /></p>
                <p><input type="button" className="btn btn-danger" value="Finalizar Compra" onClick={() => {finalizarCompra()}} /></p>
            </div>        
        </div>
    )
};

export default Itemcount;