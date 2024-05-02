import {letters} from './helpers/letters';
import './App.css'

function App() {

  return (
    <>
      <div>
        { /* My Images */}
        <h3> Game Image </h3>

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