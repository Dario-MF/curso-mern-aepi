import React, { Component } from 'react'

export class FormularioPersona extends Component {

    constructor(props){
        super(props)
        this.state = {
            persona: {
                nombre:'Su Nombre',
                apellidos:'Sus Apellidos',
                email:'Su Email',
            },
            mostrar: false
        }
    }

    modificarMensaje(e, campo){
        this.setState({
            persona:{
                ...this.state.persona,
               [campo]: e.target.value 
            }
        })
    };
    handleClick(e){
        e.preventDefault();
        this.setState({mostrar: true})
    };

    render() {
        return (
            <div className='card-component'>
            <h2>Componente formulario de clase</h2>
            <hr/>
            <form onSubmit={ e => this.handleClick(e)}>
                <label htmlFor="nombre">Nombre</label>
                <input 
                    type="text" 
                    id="nombre" 
                    required={true}
                    placeholder={this.state.persona.nombre} 
                    onChange={ e => this.modificarMensaje(e,'nombre')}
                />
                <label htmlFor="apellidos">Apellidos</label>
                <input 
                    type="text" 
                    id="apellidos" 
                    required={true}
                    placeholder={this.state.persona.apellidos} 
                    onChange={ e => this.modificarMensaje(e,'apellidos')}
                />
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    id="email" 
                    required={true}
                    placeholder={this.state.persona.email}  
                    onChange={ e => this.modificarMensaje(e,'email')}
                    />
                <button type="submit"> Enviar </button>
            </form>
            {
                (this.state.mostrar)
                    ?   <div>
                            <p>Su nombre: {this.state.persona.nombre}</p>
                            <p>Sus apellidos: {this.state.persona.apellidos}</p>
                            <p>Su Email: {this.state.persona.email}</p>
                        </div> 
                    : null 
            }
            
        </div>
        )
    }
}

export default FormularioPersona
