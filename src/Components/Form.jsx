export default function Form(){
    return (
        <div id="div-nombre">

            <p>Ingresá tu NOMBRE y hacé click en ENVIAR.</p>

            <label>Tu nombre : <input/> type="text" id="nombre"</label>

            <button onclick="agregarNombre()">ENVIAR</button>
        </div>
    );
}