import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './components/todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container border border-primary rounded mt-5' style={{background: '#e5e5e5'}}>

      <Todo />


    </div>
  )
}

export default App
