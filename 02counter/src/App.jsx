import { useState } from 'react'



function App() {
  let [count, setCount] = useState(10)
  // add function
  const addValue = () => {
    if (count >= 20) {
     return  
    } else{
      // setCount(count + 1); 
      // setCount(count + 1); 
      // setCount(count + 1); 
      setCount(prevCounter => prevCounter + 1 )
      // setCount(prevCounter => prevCounter + 1 )
      // setCount(prevCounter => prevCounter + 1 ) // becouse of usestate 
    }
  }
// Remove Function
  const removeValue = () => {
    if(count == 0){
      return
    }else{
      setCount(count - 1);
    }
  
  }

  return (
   <>
   <h1> Chai our Code </h1>
   <h2>Counter value : {count} </h2>

   <button onClick={addValue}>increase count {count} </button>
   <br />
   <br />
   <button onClick={removeValue}>decrease count {count} </button>
   </>
  )
}

export default App
