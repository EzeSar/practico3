export default function Form(){
    return (
        <div className='form-contenedor'>

            <p>Ingresá tu NOMBRE y hacé click en ENVIAR.</p>

            <label>Tu nombre : <input type='text' className='form-input'/></label>

            <button className='form-boton'>ENVIAR</button>
        </div>
    );
}