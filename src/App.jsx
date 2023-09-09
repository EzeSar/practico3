
import './App.css';
import { useState } from 'react';
import Intro from './components/Intro';
import Form from './components/Form';
import JugadaUsuario from './components/JugadaUsuario';
import Resultados from './components/Resultados';
import Marcadores from './components/Marcadores';
import BotonesAlPie from './components/BotonesAlPie';
import Jugada from './components/Jugada';
import Boton from './components/Boton';

function App() {

  let [nombre, setNombre] = useState('');
  let [jugadaUsuario, setJugadaUsuario] = useState('');
  let [jugadaCompu, setJugadaCompu] = useState('');
  let [resultado, setResultado] = useState('')
  
  function clickJugada(){
    let jugadas = ['piedra','papel','tijera'];
    setJugadaCompu(jugadas[Math.floor(Math.random() * 2.9)]);


  }

  return (
    <div className='App'>

      <h1>Piedra , papel o tijera ?</h1>
      <Intro/>
      <Form callback={(n) => setNombre(n)}/>
      <JugadaUsuario callback={(ju) => setJugadaUsuario(ju)}/>
      <Boton value='JUGADA' onClick={clickJugada} />
      <Resultados jugadaUsuario={jugadaUsuario} jugadaCompu={jugadaCompu} />
      <Marcadores nombre={nombre} />
      <BotonesAlPie/>
      
    </div>
  );
}

export default App;
