# Piedra, papel o tijera con React.

---

**Objetivo:**
Crear un juego web simple utilizando REACT, basado en el mismo juego realizado en el práctico 2.
*Este proyecto es parte de los trabajos prácticos de la segunda etapa (Páginas Web con Componentes Dinámicos) de Programación Web Front-end, Argentina Programa. Dictado por FAMAF - UNC. Córdoba, Argentina 2023.*

---

## Instrucciones de uso

Para poder jugar Piedra, papel o tijera, está disponible en [GitHub Pages](https://ezesar.github.io/practico3/ "https://ezesar.github.io/practico3/").

***Piedra, papel o tijera*** es el clásico juego de manos para 2 oponentes. En este caso nuestro rival es ***La Compu***, que genera su jugada ***aleatoriamente*** en cada ronda.

Primero debemos clickear ***a jugar!*** y después ingresar obligatoriamente nuestro ***nombre de usuario***. Luego elegiremos una de las ***3 opciones*** y al clickear el botón de ***jugada*** el sistema nos dará el resultado de la ronda.

Las victorias de cada ronda se van sumando y quien logre 3 será quien ***gane el juego***. En caso de empate no se suman puntos y se vuelve a jugar la ronda. Al finalizar el juego se reinicia clickeando ***reiniciar marcadores***. También se puede ***cambiar el nombre*** del usuario.

---

## Documentación

### PARTE 1: Configuración inicial

1. Configura un nuevo proyecto React utilizando la herramienta de línea de comandos
de React npx create-react-app .
2. Asegúrate de tener las imágenes o archivos necesarios que puedas reutilizar del
práctico 2 (por ejemplo si usaste imagenes "piedra.png", "papel.png" y "tijera.png"
ubicarlas en la carpeta correspondiente en tu proyecto react creado).

![print de assets](./src/assets/assets.png 'print de assets')

### PARTE 2: Creación de componentes básicos

1. Crea un componente llamado App que represente la aplicación en su conjunto.
2. Dentro del componente App, crea subcomponentes para representar la interfaz de
usuario, los marcadores y los resultados, utiliza JSX.
3. Utiliza propiedades (props) para pasar información entre componentes.

```jsx
import Intro from './components/Intro';
import Form from './components/Form';
import JugadaUsuario from './components/JugadaUsuario';
import Resultados from './components/Resultados';
import Marcadores from './components/Marcadores';
import BotonesAlPie from './components/BotonesAlPie';
import Jugada from './components/Jugada';
```

```jsx
{mostrarJugada &&
<div>
  <JugadaUsuario callback={(jU) => setJugadaUsuario(jU)} />
  <Jugada jugadaUsuario={jugadaUsuario} nombre={nombre} ronda={ronda} callback={(ronda, mostrar)=>manejarRonda(ronda, mostrar)} />
</div>}
<div>
  {!mostrarJugada &&
  <Resultados jugadaUsuario={jugadaUsuario} ronda={ronda} callback={(jU, mostrar)=>manejarSiguiente(jU, mostrar)} />
  }
</div>

<Marcadores nombre={nombre} ronda={ronda} />
<BotonesAlPie callback={(boton) => manejarBotones(boton)} />
```

### PARTE 3: Obtención del nombre del jugador

1. En el componente App, crea un formulario o un componente de entrada de texto
para obtener el nombre del jugador.
2. Utiliza el estado (state) de React para capturar el nombre ingresado por el jugador.

```jsx
let [nombre, setNombre] = useState('');
```

```jsx
function manejarForm(nombre, mostrar){
  setNombre(nombre);
  setMostrarForm(mostrar);
}
```

```jsx
{mostrarForm &&
  <div>
    <Form callback={(nombre, mostrar) => manejarForm(nombre, mostrar)} />
  </div>
}
```

```jsx
export default function Form(props){

  function manejarClick(){

    let nombre = document.getElementById("user-name").value;

    if(nombre===''){
      alert('ERROR, INGRESA UN NOMBRE')
    } else {
      props.callback(nombre, false);
    }

  }

  return (
    <StylDivColumn>

      <h3 css={'margin:10px;'}>Ingresá tu nombre y hacé click en ENVIAR.</h3>

      <input type='text' id="user-name" />

      <StyledBoton value='ENVIAR' onClick={manejarClick} />

    </StylDivColumn>
  );
}
```

### PARTE 4: Selección de la opción del jugador y del oponente (PC)

1. Crea un componente para representar las opciones de "piedra", "papel" y "tijera"
siempre utilizando JSX.
2. Utiliza eventos de click (onClick) para capturar la opción seleccionada por el jugador
y genera aleatoriamente la opción del oponente (PC).

```jsx
export default function JugadaUsuario(props)
```

```jsx
<StylBtnConImg imagen={piedra} tamaño={100} onClick={piedraClick} />
        
<StylBtnConImg imagen={papel} tamaño={100} onClick={papelClick} />
            
<StylBtnConImg imagen={tijera} tamaño={100} onClick={tijeraClick} />
```

```jsx
jugadaCompu = (['piedra','papel','tijera'][Math.floor(Math.random() * 2.99)]);
```

### PARTE 5: Determinación del ganador y actualización del marcador

1. Crea una función en el componente App para determinar el ganador de cada ronda y
actualizar los marcadores.
2. Utiliza el estado (state) de React para mantener el marcador del jugador y del PC.

```jsx
switch(jugadaUsuario+jugadaCompu){
	case "piedrapapel":
		resultado = ('la compu');
		ganadosCompu++;
		break;
					
	case "piedratijera":
		resultado = ('vos');
		ganadosUsuario++;
		break;
					
	case "papelpiedra":
		resultado = ('vos');
		ganadosUsuario++;
		break;
		
	case "papeltijera":
		resultado = ('la compu');
		ganadosCompu++;
		break;
		
	case "tijerapiedra":
		resultado = ('la compu');
		ganadosCompu++;
		break;
		
	case "tijerapapel":
		resultado = ('vos');
		ganadosUsuario++;
		break;
		
	default:
		resultado = ('ninguno');
}
```

```jsx
let [ronda, setRonda] = useState({
    jugadaCompu:'',
    resultado:'',
    ganadosUsuario:'0',
    ganadosCompu:'0',
    resultadoFinal:'(gana quien sume 3 puntos)'
    });
```

### PARTE 6: Control del juego y finalización

1. Implementa una lógica para controlar cuántas rondas se jugarán (al mejor de 5
intentos).
2. Utiliza el estado (state) de React para contar los intentos y verificar cuándo finaliza el
juego.

```jsx
if(ganadosUsuario === 3){
	resultadoFinal = ('JUEGO FINALIZADO, GANASTE VOS. BIEN AHÍ !!!');
} else if(ganadosCompu === 3){
	resultadoFinal = ('JUEGO FINALIZADO, GANÓ LA COMPU. SALE REVANCHA ?');
}
```

```jsx
function manejarRonda(ronda, mostrar){
    setRonda(ronda);
    setMostrarJugada(mostrar);
  }
```

### PARTE 7: Anunciar al ganador y reiniciar el juego

1. Cuando finalice el juego, muestra un mensaje anunciando al ganador.
2. Proporciona un botón para reiniciar el juego y restablecer los marcadores y el
estado.

```jsx
<h3>Elegiste {props.jugadaUsuario}, la compu eligió {props.ronda.jugadaCompu}, punto para {props.ronda.resultado}.</h3>
        
<h3>{props.ronda.resultadoFinal}</h3>
```

```jsx
<StyledBoton value='REINICIAR MARCADORES' onClick={reiniciarMarcadores} />
<StyledBoton value='CAMBIAR NOMBRE' onClick={cambiarNombre} />
```

### PARTE 8: Estilos CSS con Styled Components

1. Utiliza la librería Styled Components para aplicar estilos CSS a tus componentes de
manera más organizada.
2. Agregar estilos a tus componentes para mejorar la presentación visual del juego.

```jsx
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
```

```jsx
import styled from "styled-components";
import fondodorado from '../assets/fondo-dorado.jpg';

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
  &:hover {
  transform: scale(1.2);
  transition: 300ms;
  };
  &:active {
  box-shadow: 0 5px #777;
  transform: translateY(4px);
  };
`
```

### PARTE 9: Comentarios explicativos y organización del código

1. Agrega comentarios en tu código React para explicar el propósito de cada
componente y función.
2. Organiza tu código en componentes reutilizables y estructurados.

```jsx
<div>
  {mostrarIntro && <Intro callback={(mostrar)=>manejarIntro(mostrar)} />}
</div>

{/*estos divs en los que incorporo las variables 'mostrar...'
son los que me permiten usar la comparación &&
para mostrar y ocultar componentes según se vayan usando*/}

<div>
  {!mostrarIntro && 
  <div>
    {mostrarForm &&
    <div>...
```

```jsx
{/*el uso de los callbacks en los props permite pasar funciones
y de esta forma interactuar ida y vuelta entre componentes*/}
<Form callback={(nombre, mostrar) => manejarForm(nombre, mostrar)} />
```

![print componentes](./src/assets/componentes.png 'componentes')

### PARTE 10: Documentación y entrega

1. Agrega en el Readme.md una explicación para un usuario típico del juego y detalla
lo implementado.
2. Al finalizar todos los ejercicios deberás crear un tag con el nombre de práctico3
para realizar la entrega del mismo.

---

## Autor ✒️

* **Ezequiel Sarmiento** - [EzeSar](https://github.com/EzeSar "github.com/EzeSar") - eservicesupply@gmail.com

---
