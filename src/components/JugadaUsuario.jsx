import piedra from '../assets/piedra.png';
import papel from '../assets/papel.png';
import tijera from '../assets/tijera.png';
import StylBtnConImg from './StylBtnConImg';

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

      <StylBtnConImg imagen={piedra} tamaño={100} onClick={piedraClick} />
        
      <StylBtnConImg imagen={papel} tamaño={100} onClick={papelClick} />
            
      <StylBtnConImg imagen={tijera} tamaño={100} onClick={tijeraClick} />
        
    </div>
  );
}