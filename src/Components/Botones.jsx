import Boton from "./Boton";

export default function Botones(){
    return (
        <div className='botones-contenedor'>
            
            <Boton value='REINICIAR MARCADORES' />
            <Boton value='CAMBIAR NOMBRE' />
            <Boton value='MUSICA NO' />
            <Boton value='MUSICA SI' />

        </div>
    );
}