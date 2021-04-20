import React from 'react';

const ListadoProductos = ({ productos, addToCart }) => {
    return (
        <>
            {
                productos.map(producto => (
                    <div className="producto" key={producto.id} onClick={ () => addToCart(producto.id)}>
                        <img src={producto.image} alt={producto.name}/>
                        <p className="producto-nombre">{producto.name}</p>
                        <p className="producto-precio">{producto.price}</p>
                    </div>
                ))
            }
        </>  
    );
};

export default ListadoProductos;
