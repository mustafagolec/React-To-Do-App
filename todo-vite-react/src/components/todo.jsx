import React, {useState} from 'react'

export default function Todo() {
    const [task, setTask] = useState('')
  return (
    <div className='container row'>
        <h1 className="mt-3 text-white">To-Do App</h1>
        <div className="col-8">
            <input name="task" type="text" value="" placeholder='Write your task...' className='form-control' />
        </div>
        <div className="col-4">
            <button className="btn btn-primary form-control material-icons">add</button>
        </div>
    </div>
  )
}
