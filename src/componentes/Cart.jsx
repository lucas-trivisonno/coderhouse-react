import { useContext } from 'react';
import { CartContext } from './Context';

const Cart = () => {
    const { cart, deleteOne, deleteAll } = useContext(CartContext);
    return (
        <div className=''>
            <h2><b>PEDIDOS</b></h2>
            {cart.map((producto) => (
                <div key={producto.id}>
                    <h2>{producto.nombre}</h2>
                    <img className='img-carrito' src={producto.imagen} alt={producto.nombre} />
                    <button onClick={() => deleteOne(producto.id)} className="btn btn-danger">
                        Eliminar
                    </button>
                </div>
            ))}
            <button onClick={deleteAll} className="btn btn-danger">Eliminar todo</button>
        </div>
    );
};
export default Cart;