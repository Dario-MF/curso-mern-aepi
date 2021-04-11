import React, { useState } from 'react';
import Pantalla from './Pantalla';
import Teclado from './Teclado';
/* eslint no-eval: 0 */

const Calculadora = () => {
    const [operacion, setOperacion] = useState({
        num1: '',
        num2: '',
        operador: '',
        strOperacion: '0'
    });

    const obtenerResultado = () => {
        let resultado = '0';
        try{
            resultado = eval(operacion.strOperacion);
        }catch(error){
            console.log(error)
        }
        setOperacion({
            ...operacion,
            num1: resultado,
            num2: '',
            operador: '',
            strOperacion: resultado
        });
    };

    const clickSimbolo = (simbolo) => {
        const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
        const operador = ['/', '*', '-', '+'];
        if(numeros.includes(simbolo) && !operacion.operador){
            setOperacion({
                ...operacion,
                num1: operacion.num1 + simbolo,
                strOperacion: (operacion.strOperacion === '0')? simbolo : operacion.strOperacion + simbolo
            });
        } else if (numeros.includes(simbolo) && operacion.operador) {
            setOperacion({
                ...operacion,
                num2: operacion.num2 + simbolo,
                strOperacion: (operacion.strOperacion === '0')? simbolo : operacion.strOperacion + simbolo
            });
        } else if (operador.includes(simbolo)){
            setOperacion({
                ...operacion,
                operador: simbolo,
                strOperacion: (operacion.strOperacion === '0')? simbolo : operacion.strOperacion + simbolo
            });
        }else if( simbolo === 'C'){
            setOperacion({
                num1: '',
                num2: '',
                operador: '',
                resultado: '',
                strOperacion: '0'
            });
        }else {
            obtenerResultado()
        };
    };
    return (
        <div className='comp-calculadora'>
            <h2>AEPI</h2>
            <Pantalla 
                strOperacion={operacion.strOperacion} 
            />
            <Teclado clickSimbolo={clickSimbolo} />
        </div>
    );
};

export default Calculadora;
