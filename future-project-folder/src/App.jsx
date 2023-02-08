import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ReactForm } from './Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h1>Please provide us with your information so that we can sell it to advertisers</h1>
       <ReactForm />
    
    </div>
  )
}

export default App
