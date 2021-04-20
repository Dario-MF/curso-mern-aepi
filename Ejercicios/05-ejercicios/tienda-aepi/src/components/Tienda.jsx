import React, { useState } from 'react';
import CarritoCompra from './CarritoCompra';
import Productos from './Productos';
import { productos as productosData } from '../data/productos';

const Tienda = () => {
    const [productos] = useState(productosData);
    const [listadoCarrito, setListadoCarrito] = useState([]);
    
    const addToCart = (productId) => {
        let [productToCart] = productos.filter(product => product.id === productId);
        const productIndex = listadoCarrito.findIndex(producto => producto.id === productId);
       
        if(productIndex !== -1){
            let newListadoCarrito = listadoCarrito;
            newListadoCarrito[productIndex].count =  newListadoCarrito[productIndex].count + 1;
            setListadoCarrito([...newListadoCarrito]);
            
        }else{
            productToCart.count = 1;
            setListadoCarrito([...listadoCarrito, productToCart]);
        };
    };


    return (
        <div className='container'>
            <h1>Tienda de informatica</h1>
            <hr/> 
            <div className="row listados">
                <Productos productos={productos} addToCart={addToCart}/>
                <CarritoCompra listadoCarrito={listadoCarrito}/>
            </div>
            
        </div>
    )
}

export default Tienda
