import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <div>
  <h1>Custom app </h1>
    </div>  
  )
}


// self created obj and rendering on react render that way it is not working
// const reactElement = { 
//   type : "a",
//   props: {
//       href: "http://google.com",
//       target: "_blank"
//   },
//   children: "Click me to visit google"
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visist Google</a>
)

const reactElement = React.createElement(
  "a",
  {href : "https://google.com", target: "_blank"},
  "clicked me to visit google"
)

createRoot(document.getElementById('root')).render(
  
    <App /> 
    // <MyApp /> 
    // reactElement  // not working bcx it is obj syntx error
    // anotherElement // it is passing as a object right syntx
    // reactElement this is the way of react obj

)
