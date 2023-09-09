export default function BotonConImg({ imagen, tamaño, onClick }){
  return(
    <button className="boton-con-img">
      <img src={imagen} width={tamaño} height={tamaño} alt={imagen} onClick={onClick} />
    </button>
  );
}