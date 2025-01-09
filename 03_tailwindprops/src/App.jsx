import './App.css'
import Card from './components/Card'

function App() {
  let myObj = { // you can pass array and object is a store in variable
    username: "hitesh ",
    age: 25
  }


  return (
   <>
   <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Css</h1>
   <Card username = "wasim" someObj={myObj}/>
   <Card username = "Haider" textBtn="click me" />
   </>
  )
}

export default App
