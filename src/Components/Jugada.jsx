import StyledBoton from "./StyledBoton";

//este componente visualmente es solo un botón
//pero dentro contiene todas las acciones que generan la ronda
//a través de props obtiene todos los datos y luego los devuelve actualizados

export default function Jugada(props){
		
	let jugadaUsuario = props.jugadaUsuario;
	let jugadaCompu = props.ronda.jugadaCompu;
	let resultado = props.ronda.resultado;
	let ganadosUsuario = props.ronda.ganadosUsuario;
	let ganadosCompu = props.ronda.ganadosCompu;
	let resultadoFinal = props.ronda.resultadoFinal;
	let ronda = props.ronda;

  function clickJugada(){
		if(jugadaUsuario===''){
			alert('ERROR, ELEGÍ TU JUGADA !');
		} else {
			jugadaCompu = (['piedra','papel','tijera'][Math.floor(Math.random() * 2.99)]);
    
			switch(jugadaUsuario+jugadaCompu){
				case "piedrapapel":
					resultado = ('la compu');
					ganadosCompu++;
					break;
					
				case "piedratijera":
					resultado = ('vos');
					ganadosUsuario++;
					break;
					
				case "papelpiedra":
					resultado = ('vos');
					ganadosUsuario++;
					break;
		
				case "papeltijera":
					resultado = ('la compu');
					ganadosCompu++;
					break;
		
				case "tijerapiedra":
					resultado = ('la compu');
					ganadosCompu++;
					break;
		
				case "tijerapapel":
					resultado = ('vos');
					ganadosUsuario++;
					break;
		
				default:
					resultado = ('ninguno');
			}
	
			if(ganadosUsuario === 3){
				resultadoFinal = ('JUEGO FINALIZADO, GANASTE VOS. BIEN AHÍ !!!');
			} else if(ganadosCompu === 3){
				resultadoFinal = ('JUEGO FINALIZADO, GANÓ LA COMPU. SALE REVANCHA ?');
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

  }

	//el botón igual que otros componentes utiliza el styled
	return(
		<StyledBoton value='JUGADA' onClick={clickJugada} />
	);

}