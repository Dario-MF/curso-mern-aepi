import React from 'react';
import ListadoCarrito from './ListadoCarrito';


const CarritoCompra = ({listadoCarrito}) => {

    const calculoCarrito = () => {
        let total = 0;
        listadoCarrito.forEach(producto => {
            total += producto.count * producto.price;
        });
        return total;
    };

    return (
        <div className='box-carrito col-6'>
             <div className="header-list">
                <h3>Carrito</h3>
            </div>
            <div className="list-products">
                <ListadoCarrito productos={listadoCarrito} />
            </div>
            <div className="total-carrito">
                <p>TOTAL</p>
                <p className='price-total'>{calculoCarrito()}</p>
            </div>
            
        </div>
    )
}

export default CarritoCompra
