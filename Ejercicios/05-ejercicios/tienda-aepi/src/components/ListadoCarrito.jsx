import React from 'react';

const ListadoCarrito = ({productos, addToCart, removeToCart}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ARTÍCULO</th>
                    <th>UNIDADES</th>
                    <th>PRECIO</th>
                </tr>
            </thead>
            <tbody>
                {
                    productos.map(producto => (
                        <tr key={producto.id}>
                            <td className='td-articulo'>
                                <div className="articulo-box">
                                    <img className='cart-img' src={producto.image} alt={producto.name}/>
                                    <p className="producto-nombre">{producto.name}</p>
                                </div> 
                            </td>  
                            <td className='td-count'>
                                <div className="count-box">
                                    <button onClick={()=> removeToCart(producto.id)}> - </button>
                                    <p className="product-count">{producto.count}</p>
                                    <button onClick={()=> addToCart(producto.id)}> + </button>
                                </div>
                            </td> 
                            <td><p className="producto-precio">{producto.price}</p></td> 
                        </tr>
                    ))
                }
            </tbody>           
        </table>
    )
}

export default ListadoCarrito;
