import styled from "styled-components";
import fondodorado from '../assets/fondo-dorado.jpg';

//este botón estilizado lo uso en casi todos los componenetes
const StylBtn = styled.button`
  margin: 20px;
  padding: 3px;
  background-image: url(${fondodorado});
  background-position: center;
  background-size: cover;
  font-weight: bold;
  font-size: large;
  text-shadow:
  1px 1px 2px black,
  0 0 0.3em red;
  color: white;
  border: 3px solid grey;
  border-radius: 6px;
  box-shadow: 0 9px #aaa;
  //este detalle del & para agregar :hover o :active es diferente al css
  &:hover {
  transform: scale(1.2);
  transition: 300ms;
  };
  &:active {
  box-shadow: 0 5px #777;
  transform: translateY(4px);
  };
`
//lo exporto como función para pasarle props tal cual lo hacía sin el styled
export default function StyledBoton({ onClick, value }) {
  return(
    <StylBtn className='boton' onClick={onClick}>
      {value}
    </StylBtn>
  );
}