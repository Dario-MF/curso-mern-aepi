import React, { Component } from 'react';
import Contacto from './Contacto';

export class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactos: [
                {id:'001', activo: true, nombre: 'Pedro', apellidos: 'Martinez Santos', email: 'pedro@gmail.com'},
                {id:'002', activo: false, nombre: 'Maria', apellidos: 'Patiño Suarez', email: 'maria@gmail.com'},
                {id:'003', activo: true, nombre: 'Luis', apellidos: 'Sandoval Gutierrez', email: 'luis@gmail.com'},
                {id:'004', activo: false, nombre: 'Sandra', apellidos: 'Diaz Prieto', email: 'sandra@gmail.com'},
                {id:'005', activo: false, nombre: 'Rocio', apellidos: 'Garcia Lopez', email: 'rocio@gmail.com'}
            ]
        }
        this.handleInputName = this.handleInputName.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleDelete(id){
        this.setState({
            contactos: this.state.contactos.filter(contacto=> contacto.id !== id)
        });
    };
    handleInputName(event, id) {
        this.setState({
            contactos: this.state.contactos.map(contacto => {
                if(contacto.id === id) {
                    return contacto.name = event.target.value;
                } else {
                    return contacto;
                };
            })
        });
    };

    render() {
        return (
            <div className='contactos box-component'>
                {this.state.contactos.map(( contacto, i) => (
                    <Contacto 
                        key={contacto.id}
                        id={contacto.id}
                        nombre={contacto.nombre}
                        apellidos={contacto.apellidos}
                        email={contacto.email}
                        handleDelete={this.handleDelete}
                        handleInputName={this.handleInputName}
                    />    
                ))}
            </div>
        );
    };
};

export default Lista;
