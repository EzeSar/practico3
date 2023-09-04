import usuario from '../assets/usuario.gif';
import vs from '../assets/vs-letters.webp';
import compu from '../assets/compu.gif';

export default function Marcadores(){
    return (
        <div className='marcadores-contenedor'>

            <p className='marcador-usuario'></p>
        
            <img src={usuario} alt='usuario' width='120px' height='120px'/>
        
            <img src={vs} alt='VS' width='120px' height='120px'/>
        
            <img src={compu} alt='computadora' width='120px' height='120px'/>
        
            <p className='marcador-compu'></p>
        </div>
    );
}