import React ,{ useState } from 'react';


const Suma = ({numA, numB}) => {
    const [resultado, setResultado] = useState(0)
    
    const handleSuma = () => {
        setResultado( numA + numB);
    };
    return (
        <div className='card-component'>
            <h2>Componente Suma</h2>
            <hr/>
            <h3>Sumar: {numA} + {numB}</h3>
            <button onClick={ handleSuma }>Suma</button>
            <p> { resultado } </p>
        </div>
    );
};

export default Suma;
