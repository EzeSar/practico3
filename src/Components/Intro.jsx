import { StylDivColumn } from "./StylDivColumn";
import StyledBoton from "./StyledBoton";

export default function Intro(props){

  function clickAjugar(){

    let mostrar = false;
    props.callback(mostrar);
    
  }

  return(
    <StylDivColumn>

      <h2>GANALE A LA COMPU !</h2>
        
      <StyledBoton value='A JUGAR !' onClick={clickAjugar} />

    </StylDivColumn>
  );
}