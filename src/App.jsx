import { Children, useState } from 'react'
import './App.css'
import Input from './Input'
import Textarea from './Textarea'
import Botao from './Botao'

function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleTitle = (event) => {
    const value = event.target.value.toUpperCase()
    setTitle(value)
  }

  const handleDescription = (event) => {
    const value = event.target.value
    setDescription(value)
  }

  const addTask = () => {
    console.log("Task has been added")
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
      <p>{description}</p>
    </section>
  )
}

export default App
