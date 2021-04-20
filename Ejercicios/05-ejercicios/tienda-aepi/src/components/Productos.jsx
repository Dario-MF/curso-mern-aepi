import React, { useState } from 'react';
import Categoria from './Categoria';
import ListadoProductos from './ListadoProductos';

const Productos = ({addToCart, productos}) => {
    const [listadoCategoria, setlistadoCategoria] = useState(productos)
   
    const changeCategoria = (categoria) => {
        const newListadoCategoria = productos.filter( producto => producto.category === categoria);
        setlistadoCategoria([...newListadoCategoria]);
    };

    return (
        <div className='box-productos col-6'>
            <div className="header-list">
                <h3>Listado de productos</h3>
                <Categoria productos={productos} changeCategoria={changeCategoria}/>
            </div>
            <div className="list-products">
                <ListadoProductos productos={listadoCategoria} addToCart={addToCart}/>
            </div>
        </div>
    );
};

export default Productos;
