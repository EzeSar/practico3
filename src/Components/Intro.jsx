import Boton from "./Boton";
import '../styles/Intro.css';

export default function Intro(props){

  function clickAjugar(){

    let mostrar = false;
    props.callback(mostrar);
    
  }

  return(
    <div className='intro-contenedor'>

      <h2>GANALE A LA COMPU !</h2>
        
      <Boton value='A JUGAR !' onClick={clickAjugar} />

    </div>
  );
}