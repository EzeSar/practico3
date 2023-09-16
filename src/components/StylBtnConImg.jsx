import styled, {keyframes} from "styled-components";

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
export default function StylBtnConImg({ imagen, tamaño, onClick }){
  return(
    <StylBtnQueGira>
      <img src={imagen} width={tamaño} height={tamaño} alt={imagen} onClick={onClick} />
    </StylBtnQueGira>
  );
}