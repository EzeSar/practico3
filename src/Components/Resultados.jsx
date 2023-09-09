import Boton from "./Boton";

export default function Resultados(props){
    return(
        <div className='resultados-contenedor'>
        
            <p className='resultados-ronda'>El usuario eligió {props.jugadaUsuario}, la compu eligió {props.jugadaCompu}</p>
        
            <p className='resultados-final'>( gana quien sume 3 victorias )</p>
            
            <Boton value='SIGUIENTE' />
                
        </div>
    );
}