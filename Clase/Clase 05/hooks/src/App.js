//import { useState } from "react";
//import Mensaje from "./components/Mensaje";
import Scroll from "./components/Scroll";
import Users from "./components/Users";


const App = () => {

  //const [saludo, setSaludo] = useState('Pulse para ver fecha')


  return (
    <div className='App'>
      {/* <Mensaje texto={ saludo } />
      <button onClick={ ()=> setSaludo((new Date().toString())) }>Update Fecha!!</button> */}
      <Users />
      <Scroll />
    </div>
  );
}

export default App;
