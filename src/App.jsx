
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

  let [nombre, setNombre] = useState('');
  let [jugadaUsuario, setJugadaUsuario] = useState('');
  let [ronda, setRonda] = useState({
    jugadaUsuario:'',
    jugadaCompu:'',
    resultado:'',
    ganadosUsuario:'0',
    ganadosCompu:'0'
    });

  return (
    <div className='App'>

      <h1>Piedra , papel o tijera ?</h1>
      <Intro />
      <Form callback={(n) => setNombre(n)} />
      <JugadaUsuario callback={(ju) => setJugadaUsuario(ju)} />
      <Jugada jugadaUsuario={jugadaUsuario} nombre={nombre} ronda={ronda} callback={(ronda)=>setRonda(ronda)} />
      <Resultados ronda={ronda} />
      <Marcadores nombre={nombre} ronda={ronda} />
      <BotonesAlPie />
      
    </div>
  );
}

export default App;
