import React, {useState} from 'react'

export default function Todo() {
    const [task, setTask] = useState('')
    const [tasks,setTasks] = useState([])

    const addTask = (e)=>{
        if(task){
            const newTask = {id: new Date().getTime().toString(), title: task}
            setTasks([...tasks, newTask])
            localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]))
            setTask("")
        }
    }
  return (
    <div className='container row'>
        <h1 className="mt-3 text-white">To-Do App</h1>
        <div className="col-8">
            <input name="task" type="text" value={task} placeholder='Write your task...' className='form-control' onChange={(e) => setTask(e.target.value)}/>
        </div>
        <div className="col-4">
            <button className="btn btn-primary form-control material-icons" onClick={addTask}>add</button>
        </div>
        <div className="badge">
            You have
            {
                !tasks.length? " no tasks"
                : tasks.length === 1?" 1 task"
                : tasks.length > 1 ? ` ${tasks.length} tasks`
                : null
            }
        </div>
    </div>
  )
}
