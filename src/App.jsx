import { Children, useState } from 'react'
import './App.css'
import Input from './components/Input'
import Textarea from './components/Textarea'
import Botao from './components/Botao'

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
    // let newList = taskList.sort((t1, t2) => t2.id - t1.id)
    // setTaskList(newList)
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
      {taskList.sort((t1, t2) => t2.id  - t1.id).map((task, index) => {
        return <p  key={index}>{task.title}</p>
      })}
    </section>
  )
}

export default App
