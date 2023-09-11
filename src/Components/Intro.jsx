import Boton from "./Boton";

export default function Intro(props){

  function clickAjugar(){

    let mostrar = false;
    props.callback(mostrar);
    
  }

  return(
    <div className='intro-contenedor'>

      <p>GANALE A LA COMPU !</p>
        
      <Boton value='A JUGAR !' onClick={clickAjugar} />

    </div>
  );
}