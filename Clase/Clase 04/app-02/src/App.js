
import { useState } from 'react';
import './App.css';
//import Main from './componentes/Main';

const App = () => {
  const [mostrar, setMostrar] = useState(false)

  return (
    <div className="App">
      <button onClick={ () => setMostrar( !mostrar ) }>Saludar</button>
      { mostrar ? <p>Hola!!</p> : null }
    </div>
  );
}

export default App;
