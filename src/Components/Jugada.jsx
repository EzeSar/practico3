import BotonesJugada from './BotonesJugada';
import Boton from './Boton';

export default function Jugada(){
    return (
        <div className='jugada-contenedor'>

            <p>Hacé click en una de las 3 opciones y después en JUGADA .</p>

            <BotonesJugada  />

            <Boton value='JUGADA' />
        
        </div>
    );
}