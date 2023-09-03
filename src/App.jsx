
import './App.css';
import Titulo from './components/Titulo';
import Intro from './components/Intro';
import Form from './components/Form';
import Jugada from './components/Jugada';
import Resultados from './components/Resultados';
import Marcadores from './components/Marcadores';
import Botones from './components/Botones';

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
