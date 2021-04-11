import React from 'react';
import Boton from './Boton';

const Teclado = ({clickSimbolo}) => {

    const arrNumeros = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '0', '.', '+', '='];
    return (
        <div className='molucule-teclado'>
            { arrNumeros.map((numero, indice) => (
                <Boton 
                    key={indice + 1}
                    simbolo={numero}
                    clickSimbolo={clickSimbolo}
                />
            ))}
        </div>
    );
};

export default Teclado;
