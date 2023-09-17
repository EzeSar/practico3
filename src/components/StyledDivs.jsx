import styled from "styled-components";

//en este componente exporto 2 opciones de divs styled 
//que utilizo en todos los componentes
//solo se diferencias en el flex-direction
//entonces el segundo hereda del primero y agrega solo la diferencia
export const StylDivRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
`
export const StylDivColumn = styled(StylDivRow)`
flex-direction: column;
`