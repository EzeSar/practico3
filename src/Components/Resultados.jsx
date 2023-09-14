import Boton from "./Boton";
import '../styles/Resultados.css';

export default function Resultados(props){

    function clickSiguiente(){
        if(props.ronda.ganadosUsuario === 3 || props.ronda.ganadosCompu === 3){
            alert('JUEGO FINALIZADO, TOCÁ REINICIAR MARCADORES');
        } else {
            props.callback('', true);
        }
    }

    return(
        <div className='resultados-contenedor'>
        
            <h3>Elegiste {props.jugadaUsuario}, la compu eligió {props.ronda.jugadaCompu}, punto para {props.ronda.resultado}.</h3>
        
            <h3>{props.ronda.resultadoFinal}</h3>
            
            <Boton value='SIGUIENTE' onClick={clickSiguiente} />
                
        </div>
    );
}