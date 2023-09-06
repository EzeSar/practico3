export default function BotonConImg({ imagen, tamaño }){
  return(
    <button className="boton-con-img">
      <img src={imagen} width={tamaño} height={tamaño} alt={imagen} />
    </button>
  );
}