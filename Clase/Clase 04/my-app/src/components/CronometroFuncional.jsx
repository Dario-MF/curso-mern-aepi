import React, {useState} from 'react'

const CronometroFuncional = () => {
    const contadorInicial = 100;

    const [state, setState] = useState({
        contador: contadorInicial,
        mensaje: 'Contador iniciado'
    });
    
    const handleClick = (operacion) => {
        if(operacion === 'sumar') {
            setState({
                ...state,
                contador: state.contador + 1
            });
        }else if(operacion === 'restar') {
            setState({
                ...state,
                contador: state.contador - 1
            });
        }else {
            setState({
                ...state,
                contador: contadorInicial
            });
        };
    };
   

    return (
        <div className='card-component'>
            <h2> Componente Cronometro funcional</h2>
            <hr/>
            <h3>Contador: { state.contador }</h3>
            <p> { state.mensaje } </p>
            <button onClick= {()=> handleClick('sumar')}>+</button>
            <button onClick= { handleClick }>Reset</button>
            <button onClick= {()=> handleClick('restar')}>-</button>
        </div>
    )
}

export default CronometroFuncional
