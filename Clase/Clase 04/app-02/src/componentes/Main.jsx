import React, { Component } from 'react'

export class Main extends Component {


    constructor(props) {
        super(props);
        console.log('[Mounting] Constructor');
        this.state = ({contador:0})

    }
    static getDerivedStateFromProps(props, state) {
        console.log('[Mounting/Updating] getDerivedStateFromProps')
        return state;
    }
    componentDidMount(){
        // trabaja justo despues del render
        console.log('[Mounting] componentDidMount');
    }
    shouldComponentUpdate(nextProps, nextState){
        //metodo para trabajar con props y state antes de update
        // devuelve true o false para elegir si se renderiza o no.
        console.log('[Update] shouldComponentUpdate')
        return true;

    }
    
    getSnapshotBeforeUpdate(prevProps, prevState, snapshot) {
        console.log('[Updating] getSnapshotBeforeUpdate')
        return 'hola'
    }
    componentDidUpdate(prevProps, prevState){
        console.log('[Updating] componentDidUpdate')
    }
    componentWillUnmount(){
        
    }

    render() {
        console.log('[Mounting/Updating] Render')
        return (
            <div>
                <h1>Componente Main</h1>
                <p>{this.state.contador}</p>
                <button onClick={()=> this.setState({contador: this.state.contador + 1})}>INCREMENTAR</button>
            </div>
        )
    }
}

export default Main
