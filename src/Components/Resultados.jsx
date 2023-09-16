import { StylDivColumn } from "./StylDivColumn";
import StyledBoton from "./StyledBoton";

export default function Resultados(props){

    function clickSiguiente(){
        if(props.ronda.ganadosUsuario === 3 || props.ronda.ganadosCompu === 3){
            alert('JUEGO FINALIZADO, TOCÁ REINICIAR MARCADORES');
        } else {
            props.callback('', true);
        }
    }

    return(
        <StylDivColumn>
        
            <h3>Elegiste {props.jugadaUsuario}, la compu eligió {props.ronda.jugadaCompu}, punto para {props.ronda.resultado}.</h3>
        
            <h3>{props.ronda.resultadoFinal}</h3>
            
            <StyledBoton value='SIGUIENTE' onClick={clickSiguiente} />
                
        </StylDivColumn>
    );
}