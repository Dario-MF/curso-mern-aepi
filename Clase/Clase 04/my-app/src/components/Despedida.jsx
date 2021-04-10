import React, { Component } from 'react';

export class Despedida extends Component {
    
    render() {
        return (
            <div className='card-component'>
                <h2>Componente despedida</h2>
                <hr/>
                <h3>{ this.props.children }</h3>
                <p>Hasta pronto {this.props.nombre}!!</p>
            </div>
        );
    };
};

export default Despedida;
