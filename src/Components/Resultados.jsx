import Boton from "./Boton";

export default function Resultados(props){
    return(
        <div className='resultados-contenedor'>
        
            <p className='resultados-ronda'>El usuario eligió {props.jugadaUsuario}, la compu eligió {props.ronda.jugadaCompu}, {props.ronda.resultado}</p>
        
            <p className='resultados-final'>{props.ronda.resultadoFinal}</p>
            
            <Boton value='SIGUIENTE' />
                
        </div>
    );
}