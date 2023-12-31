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

  //useState para nombre del jugador...
  let [nombre, setNombre] = useState('');

  //para la opción de jugada...
  let [jugadaUsuario, setJugadaUsuario] = useState('');

  //para actualizar cada ronda...
  let [ronda, setRonda] = useState({
    jugadaCompu:'',
    resultado:'',
    ganadosUsuario:'0',
    ganadosCompu:'0',
    resultadoFinal:'(gana quien sume 3 puntos)'
    });

  //usé variables 'mostrar...' para mostrar/ocultar componentes
  let [mostrarIntro, setMostrarIntro] = useState(true);

  //con estas funciones actualizo estado de mostrar/ocultar
  function manejarIntro(mostrar){
    setMostrarIntro(mostrar);
  }

  let [mostrarForm, setMostrarForm] = useState(true);

  //con esta función se actualiza el nombre del jugador
  function manejarForm(nombre, mostrar){
    setNombre(nombre);
    setMostrarForm(mostrar);
  }

  let [mostrarJugada, setMostrarJugada] = useState(true);

  //esta funcion actualiza los marcadores después de cada ronda
  function manejarRonda(ronda, mostrar){
    setRonda(ronda);
    setMostrarJugada(mostrar);
  }

  //esta función habilita al jugador la siguiente ronda
  function manejarSiguiente(jU, mostrar){
    setJugadaUsuario(jU);
    setMostrarJugada(mostrar);
  }

  //función para el manejo de los botones reinicio y cambiar nombre
  function manejarBotones(boton){
    if(boton==='REINICIAR MARCADORES'){
      setJugadaUsuario('');
      setRonda({
        jugadaCompu:'',
        resultado:'',
        ganadosUsuario:'0',
        ganadosCompu:'0',
        resultadoFinal:'(gana quien sume 3 puntos)'
      });
      setMostrarJugada(true);
    } else if(boton==='CAMBIAR NOMBRE'){
      setMostrarForm(true);
    }
  }

  return (
    <div className='App'>
      
      <h1 className='h1' >Piedra , Papel o Tijera ?</h1>

      <div>
        {mostrarIntro && <Intro callback={(mostrar)=>manejarIntro(mostrar)} />}
      </div>

      {/*estos divs en los que incorporo las variables 'mostrar...'
      son los que me permiten usar la comparación &&
      para mostrar y ocultar componentes según se vayan usando*/}

      <div>
        {!mostrarIntro && 
        <div>
          {mostrarForm &&
          <div>
            {/*el uso de los callbacks en los props permite pasar funciones
            y de esta forma interactuar ida y vuelta entre componentes*/}
            <Form callback={(nombre, mostrar) => manejarForm(nombre, mostrar)} />
          </div>
          }

          <div>
            {!mostrarForm &&
            <div>
              {mostrarJugada &&
              <div>
                <JugadaUsuario callback={(jU) => setJugadaUsuario(jU)} />
                <Jugada jugadaUsuario={jugadaUsuario} nombre={nombre} ronda={ronda} callback={(ronda, mostrar)=>manejarRonda(ronda, mostrar)} />
              </div>
              }
              <div>
                {!mostrarJugada &&
                <Resultados jugadaUsuario={jugadaUsuario} ronda={ronda} callback={(jU, mostrar)=>manejarSiguiente(jU, mostrar)} />
                }
              </div>

              <Marcadores nombre={nombre} ronda={ronda} />
              <BotonesAlPie callback={(boton) => manejarBotones(boton)} />
            </div>
            }
          </div>
          
        </div>
        }

      </div>

    </div>
  );
}

export default App;
