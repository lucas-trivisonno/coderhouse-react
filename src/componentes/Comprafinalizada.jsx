import React from "react";
import { Link } from "react-router-dom";


const Comprafinalizada = ({id}) => {
    return (
        <div className="row">
            <div className="col-md-12 text-center p-5">
                <h1>Felicitaciones!</h1>
                <p  width="180">Tu compra se ha realizado con exito</p>
                <p>El pedido se generó con el ID: <b>{id}</b></p>
                <p><b>Disfrute su comida!!!</b> </p>
                <Link to={"/productos"}><button className="btn btn-danger">Volver al menu</button></Link>
            </div>
        </div>
    )
}

export default Comprafinalizada;