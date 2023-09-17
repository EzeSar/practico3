import styled, {keyframes} from "styled-components";

//este componente crea un botón styled para las opciones de jugada
//quería conservar la animación de giro que tenía en el tp2
//pero no me funcionaba tal cual copiada y pegada del css
//buscando documentación dí con esta forma que usa una const para el giro
//y luego la llama dentro del styled.button
const rotacion = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StylBtnQueGira = styled.button`
  border: 6px solid grey;
  border-radius: 50%;
  margin: 6px;
  //esto del & para agregar :focus, :hover o :active es diferente al css
  &:active {
    animation: ${rotacion} 200ms linear;
  };
  &:focus {
    border: 6px solid goldenrod;
  };
  &:hover {
    background-color: goldenrod;
  };
`
//exporto el botón como función para poder usar los props como los tenía sin styled
export default function StylBtnConImg({ imagen, tamaño, onClick }){
  return(
    <StylBtnQueGira>
      <img src={imagen} width={tamaño} height={tamaño} alt={imagen} onClick={onClick} />
    </StylBtnQueGira>
  );
}