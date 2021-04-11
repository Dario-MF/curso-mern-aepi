import React from 'react';

const Saludo = ({ nombre, children }) => {
    return (
        <div className='card-component'>
            <h2>Componente Saludo</h2>
            <hr/>
            <h3>{ children }</h3>
            <p>Hola a { nombre }</p>
        </div>
    );
};

export default Saludo;
