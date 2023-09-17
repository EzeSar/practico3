import { StylDivColumn } from "./StyledDivs";
import StyledBoton from "./StyledBoton";

//este componente se encarga de mostrar el resultado de cada ronda,
//y anuncia el ganador cuando finaliza el juego
//tiene un boton que habilita la siguiente ronda
//a menos que haya finalizado, entoces muestra un alert
export default function Resultados(props){
  function clickSiguiente(){
    if(props.ronda.ganadosUsuario === 3 || props.ronda.ganadosCompu === 3){
      alert('JUEGO FINALIZADO, TOCÁ REINICIAR MARCADORES');
    } else {
      props.callback('', true);
    }
  }

  //se usa un div styled column y un botón styled también
  return(
    <StylDivColumn>
        
      <h3>Elegiste {props.jugadaUsuario}, la compu eligió {props.ronda.jugadaCompu}, punto para {props.ronda.resultado}.</h3>
        
      <h3>{props.ronda.resultadoFinal}</h3>
            
      <StyledBoton value='SIGUIENTE' onClick={clickSiguiente} />
                
    </StylDivColumn>
  );
}