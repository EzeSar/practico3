import usuario from '../assets/usuario.gif';
import vs from '../assets/vs-letters.webp';
import compu from '../assets/compu.gif';

export default function Marcadores(){
    return (
        <div class="marcadores">

            <p id="marcador-usuario"></p>
        
            <img id="img-usuario" src={usuario} alt="usuario" width="120px" height="120px"/>
        
            <img id="img-vs" src={vs} alt="VS" width="120px" height="120px"/>
        
            <img id="img-compu" src={compu} alt="computadora" width="120px" height="120px"/>
        
            <p id="marcador-compu"></p>
        </div>
    );
}