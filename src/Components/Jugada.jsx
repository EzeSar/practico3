import piedra from '../assets/piedra.png';
import papel from '../assets/papel.png';
import tijera from '../assets/tijera.png';

export default function Jugada(){
    return (
        <div id="div-jugada">

            <p>Hacé click en una de las 3 opciones y después en JUGADA .</p>

            <div class="botones">
                <button onclick="obtenerJugadaUsuario('piedra')"><img src={piedra} width="80px" height="80px" title="Piedra" alt="Piedra"/></button>
        
                <button onclick="obtenerJugadaUsuario('papel')"><img src={papel} width="80px" height="80px" title="Papel" alt="Papel"/></button>
        
                <button onclick="obtenerJugadaUsuario('tijera')"><img src={tijera} width="80px" height="80px" title="Tijera" alt="Tijera"/></button>
            </div>

            <button onclick="jugada()">JUGADA</button>
        
        </div>
    );
}