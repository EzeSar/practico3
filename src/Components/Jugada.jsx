import Boton from "./Boton";

export default function Jugada(props){
		
	let jugadaUsuario = props.jugadaUsuario;
	let jugadaCompu = props.ronda.jugadaCompu;
	let nombre = props.nombre;
	let resultado = props.ronda.resultado;
	let ronda = props.ronda;
	let ganadosUsuario = props.ronda.ganadosUsuario;
	let ganadosCompu = props.ronda.ganadosCompu;
	let resultadoFinal = props.ronda.resultadoFinal;

  function clickJugada(){
    jugadaCompu = (['piedra','papel','tijera'][Math.floor(Math.random() * 2.99)]);
    
  	switch(jugadaUsuario+jugadaCompu){
      case "piedrapapel":
        resultado = ('ganó la compu');
				ganadosCompu++;
        break;
        
      case "piedratijera":
        resultado = (`ganó ${nombre}`);
				ganadosUsuario++;
        break;
        
      case "papelpiedra":
        resultado = (`ganó ${nombre}`);
				ganadosUsuario++;
        break;
  
      case "papeltijera":
        resultado = ('ganó la compu');
				ganadosCompu++;
        break;
  
      case "tijerapiedra":
        resultado = ('ganó la compu');
				ganadosCompu++;
        break;
  
      case "tijerapapel":
        resultado = (`ganó ${nombre}`);
				ganadosUsuario++;
        break;
  
      default:
        resultado = ('empataron');
    }

		if(ganadosUsuario === 3){
			resultadoFinal = (`JUEGO FINALIZADO, GANÓ ${nombre} !`);
		} else if(ganadosCompu === 3){
			resultadoFinal = ('JUEGO FINALIZADO, GANÓ LA COMPU !');
		}

		ronda = {
			jugadaCompu:(jugadaCompu), 
			resultado:(resultado), 
			ganadosUsuario:(ganadosUsuario),
			ganadosCompu:(ganadosCompu),
			resultadoFinal:(resultadoFinal)
		};

		props.callback(ronda, false);
  }

	return(
		<Boton value='JUGADA' onClick={clickJugada} />
	);

}