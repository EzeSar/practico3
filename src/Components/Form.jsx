import { StylDivColumn } from "./StyledDivs";
import StyledBoton from "./StyledBoton";

export default function Form(props){

  //para el ingreso del nombre de usuario se toma x id
  //y después se extrae a través de props.callback
  function manejarClick(){

    let nombre = document.getElementById("user-name").value;

    if(nombre===''){
      alert('ERROR, INGRESA UN NOMBRE')
    } else {
      props.callback(nombre, false);
    }

  }

  //acá uso styled component para el div y el botón
  return (
    <StylDivColumn>

      {/*en este h3 usé estilo inline para darle margen inferior */}
      <h3 css={'margin:10px;'}>Ingresá tu nombre y hacé click en ENVIAR.</h3>

      <input type='text' id="user-name" />

      <StyledBoton value='ENVIAR' onClick={manejarClick} />

    </StylDivColumn>
  );
}