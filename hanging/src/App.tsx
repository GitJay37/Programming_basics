import {letters} from './helpers/letters';
import {HangImage} from './components/HangImage';
import './App.css'
import { useState } from 'react';

function App() {

  const [attempts] = useState(5);

  return (
    <>
      <div>
        { /* My Images */}
        <HangImage  imageNumber= {9}/>

        { /* Hidden Word */}
        <h3>_ _ _ _ _ _ _ _ _ _ _ _ _</h3>
        
        { /* Counter attempts */}
        <h3> Attempts: 0 </h3>
      
        { /* Letters buttons */}
        
        {
          letters.map((letter) => ( 
            <button key = {letter} > {letter} </button>
          ))
        }
        
      </div>
    </>
  )
}

export default App