import usuario from '../assets/usuario.gif';
import vs from '../assets/vs-letters.webp';
import compu from '../assets/compu.gif';

export default function Marcadores(){
    return (
        <div className='marcadores-contenedor'>

            <p className='marcador-usuario'></p>
        
            <img className='marcador-img-usuario' src={usuario} alt='usuario' width='120px' height='120px'/>
        
            <img className='marcador-img-vs' src={vs} alt='VS' width='120px' height='120px'/>
        
            <img className='marcador-img-compu' src={compu} alt='computadora' width='120px' height='120px'/>
        
            <p className='marcador-compu'></p>
        </div>
    );
}