import React, { useCallback, useState } from 'react';
import Pantalla from './Pantalla';
import Teclado from './Teclado';
/* eslint no-eval: 0 */

const Calculadora = () => {
    const [operacion, setOperacion] = useState({
        strOperacion: '0'
    });

    const clickSimbolo = useCallback((simbolo) => {
        if ( simbolo === '='){
            setOperacion(o => { 
                try {
                    const total = String(eval(o.strOperacion))
                    return { strOperacion: total }
                } catch (error) {
                    return { strOperacion: '0' }
                };      
            }); 
        }else if( simbolo === 'C'){
            setOperacion({
                strOperacion: '0'
            });
        }else {       
            setOperacion( o => ({ 
                strOperacion: (o.strOperacion === '0')? simbolo : o.strOperacion + simbolo
            }));
        };
    }, [setOperacion]);

    return (
        <div className='comp-calculadora'>
            <h2>AEPI</h2>
            <Pantalla strOperacion={operacion.strOperacion} />
            <Teclado clickSimbolo={clickSimbolo} />
        </div>
    );
};

export default Calculadora;
