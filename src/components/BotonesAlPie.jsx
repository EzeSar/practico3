import Boton from "./Boton";

export default function BotonesAlPie(props){

    function reiniciarMarcadores(){
      let ronda = {
      jugadaCompu:'',
      resultado:'',
      ganadosUsuario:'0',
      ganadosCompu:'0',
      resultadoFinal:'gana quien sume 3 victorias'
      }
      props.callback('', ronda, true);
    }

    return (
        <div className='botones-al-pie-contenedor'>
            
            <Boton value='REINICIAR MARCADORES' onClick={reiniciarMarcadores} />
            <Boton value='CAMBIAR NOMBRE' />
            <Boton value='MUSICA NO' />
            <Boton value='MUSICA SI' />

        </div>
    );
}