import { useState } from 'react'
import './App.css'
import Input from './Input'

function App() {
  const {title, setTitle} = useState()

  const handleTitle = (event) => {
    setTitle(event.target.value)
  }

  return (
    <section>
      <h1>To-do List</h1>
      <Input 
        type="text"
        value={title}
        onChange={handleTitle}
      />
    </section>
  )
}

export default App
