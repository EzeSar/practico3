import Boton from "./Boton";

export default function Resultados(){
    return(
        <div className='resultados-contenedor'>
        
            <p className='resultados-ronda'></p>
        
            <p className='resultados-final'>( gana quien sume 3 victorias )</p>
            
            <Boton value='SIGUIENTE' />
                
        </div>
    );
}