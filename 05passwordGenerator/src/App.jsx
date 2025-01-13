import { useCallback, useEffect, useRef, useState } from 'react';


function App() {
  // useState hook for variable and method
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

// useRef hook
  const passwordRef = useRef(null)

  // useCallback hook (memoization)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str = str + "0123456789";
    if(charAllowed) str = str + "!@#$%^&*()_+-={}[]";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char) 
    }
    setPassword(pass)
  },[length, numberAllowed, charAllowed, setPassword])


  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,10)
    window.navigator.clipboard.writeText(password)
  },[password])

// useEffect hooks
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed,passwordGenerator])

  return (
   <>
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
        type="text"
        value={password}
        className="outline-none w-full py-1 px-3"
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipBoard}
        className='outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0 hover:bg-blue-600'
        >Copy</button>
    </div>

    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-2'>
        <input
         type="range"
         min={8}
         max={50}
         value={length}
         className=' cursor-pointer'
         onChange={(e) => setLength(e.target.value) } />
         <label>Label : {length}</label>

         <input
         type="checkbox"
         defaultChecked={numberAllowed}
         onChange={() => {setNumberAllowed((prev) =>!prev);
         }} />
         <label htmlFor="">Number</label>
        <input
         type="checkbox"
         defaultChecked={charAllowed}
         onChange={() => {setCharAllowed((prev) =>!prev);
         }} />
         <label htmlFor="">Characters</label>
      </div>
       
    </div>
   </div>
   </>
  )
}

export default App
