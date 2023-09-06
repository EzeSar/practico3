import piedra from '../assets/piedra.png';
import papel from '../assets/papel.png';
import tijera from '../assets/tijera.png';
import BotonConImg from './BotonConImg';

export default function BotonesJugada(){
  return (
    <div className='jugada-botones'>

    <BotonConImg imagen={piedra} tamaño={80} />
        
    <BotonConImg imagen={papel} tamaño={80} />
        
    <BotonConImg imagen={tijera} tamaño={80} />
    
    </div>
  );
}