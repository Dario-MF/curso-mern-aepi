import React, { Component } from 'react'

export class ProfileCard extends Component {
    constructor(props) {
        super(props);
        // Cada vez que modificamos el state se renderiza el componente.
        this.state = {
            titulo: 'Titulo del perfil',
            descripcion: 'Descripcion del perfil'
        }
    }
    render() {
        return (
            <div className='card-component'>
                <h2>Componente perfil</h2>
                <hr/>
                <h3>{ this.state.titulo }</h3>
                <p>{ this.state.descripcion }</p>
            </div>
        )
    }
}

export default ProfileCard
