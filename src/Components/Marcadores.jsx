import usuario from '../assets/usuario.gif';
import vs from '../assets/vs-letters.webp';
import compu from '../assets/compu.gif';
import Avatar from './Avatar';
import { StylDivRow } from './StylDivRow';

export default function Marcadores(props){
    return (
        <StylDivRow>
        
            <Avatar imagen={usuario} tamaño={120} />

            <p className='marcador-usuario'>{props.nombre}: {props.ronda.ganadosUsuario}</p>
        
            <Avatar imagen={vs} tamaño={120} />
        
            <p className='marcador-compu'>Compu: {props.ronda.ganadosCompu}</p>
        
            <Avatar imagen={compu} tamaño={120} />

        </StylDivRow>
    );
}