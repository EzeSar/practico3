export default function Avatar({ imagen, tamaño }){
  return(
    <img src={imagen} width={tamaño} height={tamaño} alt={imagen} />
  );
}
//este componente lo implementé porque tenía 3 avatars en los marcadores
//que comparten estructura, y les paso por props sus atributos propios