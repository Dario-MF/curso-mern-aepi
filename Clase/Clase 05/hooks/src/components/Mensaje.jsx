import React, { useEffect, useState } from 'react'

const Mensaje = ({texto}) => {
    const [contador, setContador] = useState(0);
    useEffect(() => {
        
        console.log('Mensaje renderizado')
    }, [texto])

    return (
        <div>
            <h2>La fecha actual es: { texto }</h2>
            <h3>Contador: {contador}</h3>
            <button onClick={()=> setContador(contador + 1)}>Incrementa</button>
        </div>
    )
}

export default Mensaje
