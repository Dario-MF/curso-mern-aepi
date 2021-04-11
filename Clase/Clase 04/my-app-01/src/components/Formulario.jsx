import React, { useState } from 'react'

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre:'',
        apellidos:''
    });
    const modificarMensaje = (e, mensaje) => {
        setDatos({
            ...datos,
            [mensaje]: e.target.value
        });
    };
    return (
        <div className='card-component'>
            <h2>Componente formulario</h2>
            <hr/>
            <form action="">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" placeholder='Ingrese su nombre' onChange={(e) => modificarMensaje(e,'nombre')}/>
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" name="apellidos" id="apellidos" placeholder='Ingrese sus apellidos' onChange={(e) => modificarMensaje(e,'apellidos')}/>
            </form>
            <p>Su nombre: {datos.nombre}</p>
            <p>Sus apellidos: {datos.apellidos}</p>
        </div>
    )
}

export default Formulario
