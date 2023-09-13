
import './App.css';
import { useState } from 'react';
import Intro from './components/Intro';
import Form from './components/Form';
import JugadaUsuario from './components/JugadaUsuario';
import Resultados from './components/Resultados';
import Marcadores from './components/Marcadores';
import BotonesAlPie from './components/BotonesAlPie';
import Jugada from './components/Jugada';
import Musica from './components/Musica';
function App() {

  let [nombre, setNombre] = useState('');

  let [jugadaUsuario, setJugadaUsuario] = useState('');

  let [ronda, setRonda] = useState({
    jugadaCompu:'',
    resultado:'',
    ganadosUsuario:'0',
    ganadosCompu:'0',
    resultadoFinal:'(gana quien sume 3 puntos)'
    });

  let [mostrarIntro, setMostrarIntro] = useState(true);

  function manejarIntro(mostrar){
    setMostrarIntro(mostrar);
    setMusicaPlay(!mostrar);
  }

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

  function manejarSiguiente(jU, mostrar){
    setJugadaUsuario(jU);
    setMostrarJugada(mostrar);
  }

  let [musicaPlay, setMusicaPlay] = useState(false);

  function manejarBotones(boton){
    if(boton==='REINICIAR MARCADORES'){
      setJugadaUsuario('');
      setRonda({
        jugadaCompu:'',
        resultado:'',
        ganadosUsuario:'0',
        ganadosCompu:'0',
        resultadoFinal:'gana quien sume 3 victorias'
      });
      setMostrarJugada(true);
    } else if(boton==='CAMBIAR NOMBRE'){
      setMostrarForm(true);
    }

  }

  return (
    <div className='App'>

      <div>
        {musicaPlay && <Musica />}
      </div>

      <h1>Piedra , Papel o Tijera ?</h1>

      <div>
        {mostrarIntro && <Intro callback={(mostrar)=>manejarIntro(mostrar)} />}
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
                <Resultados jugadaUsuario={jugadaUsuario} ronda={ronda} callback={(jU, mostrar)=>manejarSiguiente(jU, mostrar)} />}
              </div>
            </div>}
          </div>

          <Marcadores nombre={nombre} ronda={ronda} />
          <BotonesAlPie callback={(boton) => manejarBotones(boton)} />

        </div>}

      </div>

    </div>
  );
}

export default App;
