import Boton from "./Boton";
import '../styles/Form.css';

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
        <div className='form-contenedor'>

            <h3>Ingresá tu nombre y hacé click en ENVIAR.</h3>

            <input type='text' id="user-name" />

            <Boton value='ENVIAR' onClick={manejarClick} />

        </div>
    );
}