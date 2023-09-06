
import './App.css';
import Intro from './components/Intro';
import Form from './components/Form';
import Jugada from './components/Jugada';
import Resultados from './components/Resultados';
import Marcadores from './components/Marcadores';
import BotonesAlPie from './components/BotonesAlPie';

function App() {
  return (
    <div className="App">

      <h1>Piedra , papel o tijera ?</h1>
      <Intro/>
      <Form/>
      <Jugada/>
      <Resultados/>
      <Marcadores/>
      <BotonesAlPie/>
      
    </div>
  );
}

export default App;
