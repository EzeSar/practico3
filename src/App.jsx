
import './App.css';
import { useState } from 'react';
import Intro from './components/Intro';
import Form from './components/Form';
import JugadaUsuario from './components/JugadaUsuario';
import Resultados from './components/Resultados';
import Marcadores from './components/Marcadores';
import BotonesAlPie from './components/BotonesAlPie';
import Jugada from './components/Jugada';

function App() {

  let [nombre, setNombre] = useState("");
  let [jugadaUsuario, setJugadaUsuario] = useState("");
  let [jugadaCompu, setJugadaCompu] = useState("");
  
  return (
    <div className="App">

      <h1>Piedra , papel o tijera ?</h1>
      <Intro/>
      <Form callback={(n) => setNombre(n)}/>
      <JugadaUsuario callback={(ju) => setJugadaUsuario(ju)}/>
      <Jugada callback={(jc) => setJugadaCompu(jc)} />
      <Resultados jugadaUsuario={jugadaUsuario} />
      <Marcadores nombre={nombre} />
      <BotonesAlPie/>
      
    </div>
  );
}

export default App;
