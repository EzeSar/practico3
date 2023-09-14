import tetris from '../assets/tetris.mp3';

export default function Musica(props){

  const audio = new Audio(tetris);
  audio.loop = true;

  function musica(play){
    if(play){
      audio.loop = true;
      audio.volume = 0.2;
      audio.play();
    } else {
      audio.volume = 0;
    }
  }

  return(
    musica(props.play)
  );
}