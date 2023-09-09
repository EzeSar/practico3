export default function Boton({ onClick, value }) {
  return(
    <button className='boton' onClick={onClick}>
      {value}
    </button>
  );
}