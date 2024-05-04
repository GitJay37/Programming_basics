import {letters} from './helpers/letters';
import {HangImage} from './components/HangImage';
import './App.css'
import { useEffect, useState } from 'react';
import { getRandomWord } from './helpers/getRandomWord';

function App() {


  const [ word ] = useState(getRandomWord());
  const [ hiddenWord, setHiddenWord ] = useState( '_ '.repeat( word.length ) );
  const  [attempts, setAttempts ] = useState(0);
  const [ lose, setLose ] = useState(false);
  const [ won, setWon ] = useState(false);

  useEffect(() => {
    if(attempts >= 9){
      setLose(true);
    }
  }, [ attempts ] );

  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(' ').join('');
    if(currentHiddenWord === word){
      setWon(true);    
    }
  }, [ hiddenWord ] );


  const checkLetter = (letter: string) => {
    
    if (lose) return;
    
    if( !word.includes(letter) ){
      setAttempts( Math.min( attempts + 1, 9 ));
      return;
    }

    const hiddenWordArray = hiddenWord.split(' ');
    console.log(hiddenWordArray);

    for (let i = 0; i < word.length; i++) {
      if(word[i] === letter){
        hiddenWordArray[i] = letter;

      }
    }
    setHiddenWord( hiddenWordArray.join(' '));
  }

  return (
    <>
      <div>
        { /* My Images */}
        <HangImage  imageNumber= {attempts}/>

        { /* Hidden Word */}
        <h3>{ hiddenWord }</h3>
        
        { /* Counter attempts */}
        <h3> Attempts: {attempts} </h3>

        {/* Alerting a message if the participant lost*/}

        {

          (lose) 
          ? <h3>You lose! <h3>Here it is the word: {word} you were supossed to guess </h3></h3> : ''
        }
        
        {/* Alerting a message if the participant Won*/}

        {

        (won) 
        ? <h3>Congrats!. You won! you guessed the word: {word}</h3> : ''
        }

        { /* Letters buttons */}
        
        {
          letters.map(( letter ) => ( 
            <button 
              onClick={() => checkLetter( letter )}
              key = { letter} > { letter } 
            
            </button>
          ))
        }
        
      </div>
    </>
  )
}

export default App