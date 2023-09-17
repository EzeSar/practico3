import StyledBoton from './StyledBoton';
import { StylDivRow } from './StyledDivs';

//estos botones los agrupé en este componente
//en principio iban a ser 4 como la versión del tp2
//pero opté por quitar la musica de fondo (botones musica si y musica no)
//porque me traía errores que no pude solucionar
export default function BotonesAlPie(props){

  //la funcionalidad la dividí en 2 funciones (1 por botón)
  //y una función que toma la opción y la saca por props
  function reiniciarMarcadores(){
    manejarBotones('REINICIAR MARCADORES');
  }

  function cambiarNombre(){
    manejarBotones('CAMBIAR NOMBRE');
  }
    
  function manejarBotones(boton){
    props.callback(boton);
  }

  //acá utilizo styled component para el div y los botones
  return (
    <StylDivRow>
            
      <StyledBoton value='REINICIAR MARCADORES' onClick={reiniciarMarcadores} />
      <StyledBoton value='CAMBIAR NOMBRE' onClick={cambiarNombre} />
            
    </StylDivRow>
  );
}