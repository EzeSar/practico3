import Boton from "./Boton";

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
        <div className='botones-al-pie-contenedor'>
            
            <Boton value='REINICIAR MARCADORES' onClick={reiniciarMarcadores} />
            <Boton value='CAMBIAR NOMBRE' onClick={cambiarNombre} />
            <Boton value='MUSICA NO' />
            <Boton value='MUSICA SI' />

        </div>
    );
}