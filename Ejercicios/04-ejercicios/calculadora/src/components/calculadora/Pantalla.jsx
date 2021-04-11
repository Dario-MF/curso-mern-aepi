import React, { useState } from 'react';

const Pantalla = ({strOperacion}) => {
    const [pantalla, setPantalla] = useState({
        operacion: 0
    });
    const cambiaPantalla = () => {
        if(strOperacion !== pantalla.operacion ) {
            setPantalla({
                operacion: strOperacion,
            });
        };
    };
    cambiaPantalla();
    return (
        <div className='atom-pantalla'>
            <p className='text-pantalla'>{pantalla.operacion }</p>
        </div>
    );
};

export default Pantalla;
