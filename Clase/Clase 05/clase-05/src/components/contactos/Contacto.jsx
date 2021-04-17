import React from 'react';

const Contacto = ({id, nombre, apellidos, email, handleDelete, handleInputName }) => {
    return (
        <div className='contacto'>
            <p>{ nombre } { apellidos }</p>
            <p>{ email }</p>
            <button className='btn-delete' onClick={()=> handleDelete(id)}>Borrar</button>
            <input type="text" value={ nombre } onChange={(e)=> handleInputName(e, id)}/>
        </div>
    );
};

export default Contacto;
