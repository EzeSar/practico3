import usuario from '../assets/usuario.gif';
import vs from '../assets/vs-letters.webp';
import compu from '../assets/compu.gif';
import Avatar from './Avatar';
import '../styles/Marcadores.css';

export default function Marcadores(props){
    return (
        <div className='marcadores-contenedor'>
        
            <Avatar imagen={usuario} tamaño={120} />

            <p className='marcador-usuario'>{props.nombre}: {props.ronda.ganadosUsuario}</p>
        
            <Avatar imagen={vs} tamaño={120} />
        
            <p className='marcador-compu'>Compu: {props.ronda.ganadosCompu}</p>
        
            <Avatar imagen={compu} tamaño={120} />

        </div>
    );
}