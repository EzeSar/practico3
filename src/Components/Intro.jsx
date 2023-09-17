import { StylDivColumn } from "./StyledDivs";
import StyledBoton from "./StyledBoton";

//este componente podría haberlo descartado porque no tiene utilidad
//en el tp2 lo usé para poder activar la música de fondo
//en este tp quité la música por errores pero dejé esta intro igualmente
export default function Intro(props){

  function clickAjugar(){

    let mostrar = false;
    props.callback(mostrar);
    
  }

 //utilizo styled components para el div y el botón
  return(
    <StylDivColumn>

      <h2>GANALE A LA COMPU !</h2>
        
      <StyledBoton value='A JUGAR !' onClick={clickAjugar} />

    </StylDivColumn>
  );
}