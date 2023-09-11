
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
    jugadaCompu:'',
    resultado:'',
    ganadosUsuario:'0',
    ganadosCompu:'0',
    resultadoFinal:'gana quien sume 3 victorias'
    });

  let [mostrarIntro, setMostrarIntro] = useState(true);

  let [mostrarForm, setMostrarForm] = useState(true);

  function manejarForm(nombre, mostrar){
    setNombre(nombre);
    setMostrarForm(mostrar);
  }

  let [mostrarJugada, setMostrarJugada] = useState(true);

  function manejarRonda(ronda, mostrar){
    setRonda(ronda);
    setMostrarJugada(mostrar);
  }

  return (
    <div className='App'>

      <h1>Piedra , papel o tijera ?</h1>

      <div>
        {mostrarIntro && <Intro callback={(mostrar)=>setMostrarIntro(mostrar)} />}
      </div>

      <div>

        {!mostrarIntro && 
        <div>

          {mostrarForm &&
          <div>
            <Form callback={(nombre, mostrar) => manejarForm(nombre, mostrar)} />
          </div>}

          <div>
            {!mostrarForm &&
            <div>
              {mostrarJugada &&
              <div>
                <JugadaUsuario callback={(jU) => setJugadaUsuario(jU)} />
                <Jugada jugadaUsuario={jugadaUsuario} nombre={nombre} ronda={ronda} callback={(ronda, mostrar)=>manejarRonda(ronda, mostrar)} />
              </div>}
              <div>
                {!mostrarJugada &&
                <Resultados ronda={ronda} jugadaUsuario={jugadaUsuario} callback={(mostrar)=>setMostrarJugada(mostrar)} />}
              </div>
            </div>}
          </div>

          <Marcadores nombre={nombre} ronda={ronda} />
          <BotonesAlPie />

        </div>}

      </div>

    </div>
  );
}

export default App;
