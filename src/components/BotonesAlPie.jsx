import Boton from "./Boton";

export default function BotonesAlPie(){
    return (
        <div className='botones-al-pie-contenedor'>
            
            <Boton value='REINICIAR MARCADORES' />
            <Boton value='CAMBIAR NOMBRE' />
            <Boton value='MUSICA NO' />
            <Boton value='MUSICA SI' />

        </div>
    );
}