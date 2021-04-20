import React from 'react'

const ListadoCarrito = ({productos}) => {
    return (
        <>
            {
                productos.map(producto => (
                    <div className="product-cart" key={producto.id}>
                        <img src={producto.image} alt={producto.name}/>
                        <p className="producto-nombre">{producto.name}</p>    
                        <p className="product-count">{producto.count + ' x'}</p>
                        <p className="producto-precio">{producto.price}</p>     
                    </div>
                ))
            }
        </>
    )
}

export default ListadoCarrito;
