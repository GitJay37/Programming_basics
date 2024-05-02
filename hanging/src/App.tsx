import {letters} from './helpers/letters';
import {HangImage} from './components/HangImage';
import './App.css'
import { useState } from 'react';

function App() {


  const [ word ] = useState('COMPONENT');
  const [ hiddenWord, setHiddenWord ] = useState( '_ '.repeat( word.length ) );
  const  [attempts, setAttempts ] = useState(0);

  const checkLetter = (letter: string) => {
    
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