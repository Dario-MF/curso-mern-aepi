import React from 'react';

const Boton = ({simbolo, clickSimbolo}) => {

    const handleClick = () => {
        clickSimbolo(simbolo);
    };
    return (
        <button className='atom-boton' onClick={handleClick}>{simbolo}</button>
    );
};

export default Boton;
