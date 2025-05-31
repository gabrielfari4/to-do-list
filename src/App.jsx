import { Children, useState } from 'react'
import './App.css'
import Input from './Input'
import Textarea from './Textarea'
import Botao from './Botao'

function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [taskList, setTaskList] = useState([])
  const [countId, setCountId] = useState(1)
  const [completed, setCompleted] = useState(false)

  const handleTitle = (event) => {
    const value = event.target.value.toUpperCase()
    setTitle(value)
  }

  const handleDescription = (event) => {
    const value = event.target.value
    setDescription(value.toString())
  }

  const addTask = () => {
    const newTask = {
        id: countId,
        title: title,
        description: description,
        completed: completed
      }
    
    setTaskList((oldTaskList) => {
     return [...oldTaskList, newTask]
    })
    setCountId((countId) => countId + 1)
    // setTaskList(taskList.sort((t1, t2) => t2 - t1))
    console.log(taskList);
    
    setTitle('')
    setDescription('')
  }

  return (
    <section>
      <h1>To-do List</h1>
      <Input 
        type="text"
        value={title}
        onChange={handleTitle}
      />
      <Textarea
        value={description}
        onChange={handleDescription}
      />
      <Botao 
        onClick={addTask}
      />
      {taskList.map((task, index) => {
        return <p  key={index}>{task.title}</p>
      })}
    </section>
  )
}

export default App
