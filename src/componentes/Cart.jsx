import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './Context';


const Cart = () => {
    const { cart, deleteOne, deleteAll } = useContext(CartContext);
    
    return (
        <div>
            <h2><b>PEDIDOS</b></h2>
            {cart.map((producto) => (
                <div key={producto.id}>
                    <h2>{producto.nombre}</h2>
                    <img className='img-carrito' src={producto.imagen} alt={producto.nombre} />
                    <b>{producto.cantidad} x ${producto.precio}</b>
                   <b> ${producto.cantidad * producto.precio}</b>
                    <button onClick={() => deleteOne(producto.id)} className="btn btn-danger">
                        Eliminar
                    </button><br />
                    <button onClick={deleteAll} className="btn btn-danger">Eliminar todo</button>
                    <Link to={"/checkout"} title="Finalizar Compra">
             <button className="btn btn-danger">Finalizar Compra</button>
             </Link>
                </div>
            ))}
            
            
        </div>
    );
};
export default Cart;