import Boton from "./Boton";

export default function Resultados(props){

    function clickSiguiente(){
        if(props.ronda.ganadosUsuario === 3 || props.ronda.ganadosCompu === 3){
            alert('JUEGO FINALIZADO, DEBES REINICIAR');
        } else {
            props.callback('', true);
        }
    }

    return(
        <div className='resultados-contenedor'>
        
            <p className='resultados-ronda'>Elegiste {props.jugadaUsuario}, la compu eligió {props.ronda.jugadaCompu}, punto para {props.ronda.resultado}.</p>
        
            <p className='resultados-final'>{props.ronda.resultadoFinal}</p>
            
            <Boton value='SIGUIENTE' onClick={clickSiguiente} />
                
        </div>
    );
}