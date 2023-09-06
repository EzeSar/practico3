import usuario from '../assets/usuario.gif';
import vs from '../assets/vs-letters.webp';
import compu from '../assets/compu.gif';
import Avatar from './Avatar';

export default function Marcadores(){
    return (
        <div className='marcadores-contenedor'>

            <p className='marcador-usuario'></p>
        
            <Avatar imagen={usuario} tamaño={120} />
        
            <Avatar imagen={vs} tamaño={120} />
        
            <Avatar imagen={compu} tamaño={120} />
        
            <p className='marcador-compu'></p>

        </div>
    );
}