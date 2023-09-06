import piedra from '../assets/piedra.png';
import papel from '../assets/papel.png';
import tijera from '../assets/tijera.png';

export default function BotonesJugada(){
  return (
    <div className='jugada-botones'>
    <button className='jugada-boton-piedra'>
      <img src={piedra} width='80px' height='80px' title='Piedra' alt='Piedra'/>
    </button>
        
    <button className='jugada-boton-papel'>
      <img src={papel} width='80px' height='80px' title='Papel' alt='Papel'/>
    </button>
        
    <button className='jugada-boton-tijera'>
      <img src={tijera} width='80px' height='80px' title='Tijera' alt='Tijera'/>
    </button>
  </div>
  );
}