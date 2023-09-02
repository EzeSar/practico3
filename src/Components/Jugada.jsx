export default function Jugada(){
    return (
        <div id="div-jugada">

            <p>Hacé click en una de las 3 opciones y después en JUGADA .</p>

            <div class="botones">
                <button onclick="obtenerJugadaUsuario('piedra')"><img src={"../assets/piedra.png"} width="80px" height="80px" title="Piedra" alt="Piedra"/></button>
        
                <button onclick="obtenerJugadaUsuario('papel')"><img src={"../assets/papel.png"} width="80px" height="80px" title="Papel" alt="Papel"/></button>
        
                <button onclick="obtenerJugadaUsuario('tijera')"><img src={"../assets/tijera.png"} width="80px" height="80px" title="Tijera" alt="Tijera"/></button>
            </div>

            <button onclick="jugada()">JUGADA</button>
        
        </div>
    );
}