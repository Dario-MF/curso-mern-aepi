import React, { useState } from 'react';
import FormArticulos from './FormArticulos';
import ListaArticulos from './ListaArticulos';

const GestorCompras = () => {

    const [productos, setProductos] = useState([]);

    const createProduct = (product) => {
        setProductos([
            ...productos,
            product
        ])
    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col-6">
                    FORMULARIO
                    <hr/>
                    <FormArticulos productCreated={createProduct} />
                </div>
                <div className="col-6">
                    LISTA
                    <hr/>
                    <ListaArticulos productos={ productos }/>
                </div>
            </div>
            
        </div>
    );
};

export default GestorCompras;
