import React, { useState } from 'react';
    
const FormArticulos = ({ productCreated }) => {
    
    const [producto, setProducto] = useState({
            nombre: '',
            categoria: 'carniceria'
    });

    const handleInputChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        productCreated(producto);
    };


    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="InputNombre" className="form-label">Nombre del producto</label>
                <input type="text" className="form-control" name='nombre' id="InputNombre" value={producto.nombre} onChange={handleInputChange} required={true} />
            </div>
            <div className="form-group">
                <label htmlFor="categoria" className="form-label">Categoria</label>
                <select className="form-control" value={producto.categoria} onChange={handleInputChange} name="categoria" id="categoria" aria-label="Default select example" >
                    <option value="hogar">Hogar</option>
                    <option value="pescaderia">Pescaderia</option>
                    <option value="carniceria">Carniceria</option>
                    <option value="panaderia">Panaderia</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default FormArticulos;
