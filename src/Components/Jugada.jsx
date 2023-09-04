import piedra from '../assets/piedra.png';
import papel from '../assets/papel.png';
import tijera from '../assets/tijera.png';
import Boton from './Boton';

export default function Jugada(){
    return (
        <div className='jugada-contenedor'>

            <p>Hacé click en una de las 3 opciones y después en JUGADA .</p>

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

            <Boton value='JUGADA' />
        
        </div>
    );
}