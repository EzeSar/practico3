import Titulo from './Components/Titulo';
import './App.css';
import Intro from './Components/Intro';
import Form from './Components/Form';
import Jugada from './Components/Jugada';
import Resultados from './Components/Resultados';
import Marcadores from './Components/Marcadores';
import Botones from './Components/Botones';

function App() {
  return (
    <div className="App">
      <Titulo/>
      <Intro/>
      <Form/>
      <Jugada/>
      <Resultados/>
      <Marcadores/>
      <Botones/>
    </div>
  );
}

export default App;
