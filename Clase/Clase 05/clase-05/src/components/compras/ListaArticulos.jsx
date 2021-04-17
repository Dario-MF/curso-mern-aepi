import React from 'react';

const ListaArticulos = ({ productos }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Categoria</th>
                </tr>
            </thead>
            <tbody>
                {
                    productos.map((producto, index) => (
                        <tr key={index + 1}>
                             <th scope="row">{ index + 1}</th>
                             <td>{ producto.nombre }</td>
                             <td>{ producto.categoria }</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default ListaArticulos;
