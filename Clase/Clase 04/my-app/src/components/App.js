import Saludo from "./Saludo";
import '../styles/styles.css';
import Despedida from "./Despedida";
import ProfileCard from "./ProfileCard";
import Cronometro from "./Cronometro";
import CronometroFuncional from "./CronometroFuncional";
import Suma from "./Suma";
import Formulario from "./Formulario";
import FormularioPersona from "./FormularioPersona";




const App = () => {

  
  const cronoFinalizado = () => {
    console.log('terminada cuenta atras!!')
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Componentes basicos:</h1>
      </header>
      <div className='container'>
        <Saludo nombre='Dario' >Componente saludo</Saludo>
        <Despedida nombre='Dario'>Componente despedida</Despedida>
        <ProfileCard />
        <Cronometro cronoFinalizado={cronoFinalizado} />
        <CronometroFuncional />
        <Suma numA={5} numB={6} />
        <Formulario />
        <FormularioPersona />
      </div>
      
    </div>
  );
};

export default App;
