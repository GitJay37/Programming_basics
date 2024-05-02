import {letters} from './helpers/letters';
import {HangImage} from './components/HangImage';
import './App.css'
import { useState } from 'react';

function App() {

  const [attempts, setAttempts] = useState(0);

  const checkLetter = (letter: string) => {
    console.log(letter);
    setAttempts( Math.min( attempts + 1, 9 ));
  }

  return (
    <>
      <div>
        { /* My Images */}
        <HangImage  imageNumber= {attempts}/>

        { /* Hidden Word */}
        <h3>_ _ _ _ _ _ _ _ _ _ _ _ _</h3>
        
        { /* Counter attempts */}
        <h3> Attempts: {attempts} </h3>
      
        { /* Letters buttons */}
        
        {
          letters.map((letter) => ( 
            <button 
              onClick={() => checkLetter(letter)}
              key = {letter} > {letter} 
            
            </button>
          ))
        }
        
      </div>
    </>
  )
}

export default App