import piedra from '../assets/piedra.png';
import papel from '../assets/papel.png';
import tijera from '../assets/tijera.png';
import StylBtnConImg from './StylBtnConImg';
import { StylDivRow } from './StyledDivs';
import { StylDivColumn } from './StyledDivs';

//en este componente se agrupan las 3 opciones de jugada para el jugador
//utilizo 1 funcion para cada opción que saca por props la elegida
export default function JugadaUsuario(props){
  function piedraClick(){
    props.callback('piedra');
  }

  function papelClick(){
    props.callback('papel');
  }

  function tijeraClick(){
    props.callback('tijera');
  }

  //acá utilicé una combinación de divs styled column y row
  //y este componente usa botones styled pero diferente a los otros
  return (

    <StylDivColumn>

      <p>Hacé click en una de las 3 opciones y después en JUGADA .</p>

      <StylDivRow>

        <StylBtnConImg imagen={piedra} tamaño={100} onClick={piedraClick} />
  
        <StylBtnConImg imagen={papel} tamaño={100} onClick={papelClick} />
      
        <StylBtnConImg imagen={tijera} tamaño={100} onClick={tijeraClick} />

      </StylDivRow>
        
    </StylDivColumn>
  );
}