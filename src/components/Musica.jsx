import tetris from '../assets/tetris.mp3';

export default function Musica(){

  const audio = new Audio(tetris);
  audio.loop = true;

  function musica(){
    audio.loop = true;
    audio.volume = 0.2;
    audio.play();
  }

  return(
    musica()
  );
}