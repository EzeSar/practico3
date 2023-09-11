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

            <p>Ingresá tu NOMBRE y hacé click en ENVIAR.</p>

            <label>Tu nombre : <input type='text' id="user-name" /></label>

            <Boton value='ENVIAR' onClick={manejarClick} />

        </div>
    );
}