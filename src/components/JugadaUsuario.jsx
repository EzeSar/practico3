import piedra from '../assets/piedra.png';
import papel from '../assets/papel.png';
import tijera from '../assets/tijera.png';
import BotonConImg from './BotonConImg';

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

  return (

    <div className='jugada-usuario-contenedor'>

      <p>Hacé click en una de las 3 opciones y después en JUGADA .</p>

      <BotonConImg imagen={piedra} tamaño={80} onClick={piedraClick} />
        
      <BotonConImg imagen={papel} tamaño={80} onClick={papelClick} />
            
      <BotonConImg imagen={tijera} tamaño={80} onClick={tijeraClick} />
        
    </div>
  );
}