import React, { Component } from 'react'

export class Cronometro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 10,
            mensaje: 'Cronometro iniciado'
        };
        
        const interval = setInterval(()=> {
            this.setState({
                contador: this.state.contador - 1
            })
            if( this.state.contador === 5){
                this.setState({
                    mensaje: 'Cronometro llego a 5'
                })
            }
            if(this.state.contador === 0){
                clearInterval(interval);
                this.props.cronoFinalizado();
            }
        }, 1000)
    }
    
    render() {
        return (
            <div className='card-component'>
                <h2>Componente cronometro con clase</h2>
                <hr/>
                <h3>Cronometro: { this.state.contador }</h3>
                <p> { this.state.mensaje } </p>
                
            </div>
        )
    }
}

export default Cronometro
