import { useState } from 'react'
import './App.css'
import Todo from './components/todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container border border-warning rounded mt-5' style={{background: '#ba7c00'}}>
      <Todo />
    </div>
  )
}

export default App