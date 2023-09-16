import { StylDivColumn } from "./StylDivColumn";
import StyledBoton from "./StyledBoton";

export default function Form(props){

  function manejarClick(){

    let nombre = document.getElementById("user-name").value;

    if(nombre===''){
      alert('ERROR, INGRESA UN NOMBRE')
    } else {
      props.callback(nombre, false);
    }

  }

    return (
        <StylDivColumn>

            <h3 css={'margin:10px;'}>Ingresá tu nombre y hacé click en ENVIAR.</h3>

            <input type='text' id="user-name" />

            <StyledBoton value='ENVIAR' onClick={manejarClick} />

        </StylDivColumn>
    );
}