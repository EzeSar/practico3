import StyledBoton from './StyledBoton';
import { StylDivRow } from './StylDivRow';

export default function BotonesAlPie(props){

  function reiniciarMarcadores(){
    manejarBotones('REINICIAR MARCADORES');
  }

  function cambiarNombre(){
    manejarBotones('CAMBIAR NOMBRE');
  }
    
  function manejarBotones(boton){
    props.callback(boton);
  }

  return (
    <StylDivRow>
            
      <StyledBoton value='REINICIAR MARCADORES' onClick={reiniciarMarcadores} />
      <StyledBoton value='CAMBIAR NOMBRE' onClick={cambiarNombre} />
            
    </StylDivRow>
  );
}