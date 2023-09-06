export default function Avatar({ imagen, tamaño }){
  return(
    <img src={imagen} width={tamaño} height={tamaño} alt={imagen} />
  );
}