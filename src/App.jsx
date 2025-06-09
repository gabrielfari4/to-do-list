import { useEffect, useState } from 'react'
import './App.css'
import Input from './components/Input'
import Textarea from './components/Textarea'
import Botao from './components/Botao'
import Tarefa from './components/Tarefa'
import Filtro from './components/Filtro'

// TODO: responsividade
// TODO: lógica filtro
// TODO: lógica dark mode
// TODO: lógica localStorage

function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [taskList, setTaskList] = useState([])
  const [countId, setCountId] = useState(1)
  const [filteredList, setFilteredList] = useState([])
  const [checkbox, setCheckbox] = useState("todas")

  const handleTitle = (event) => {
    const value = event.target.value.toUpperCase()
    setTitle(value)
  }

  const handleDescription = (event) => {
    const value = event.target.value
    setDescription(value.toString())
  }

  const addTask = () => {
    if (title === '') return

    const newTask = {
        id: countId,
        title: title,
        description: description,
        completed: false
      }
    
    setTaskList((oldTaskList) => {
     return [...oldTaskList, newTask]
    })
    setCountId((countId) => countId + 1)
    
    
  }

  const toggleCompleted = (id) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTaskList(taskList.filter(task => task.id !== id))
  }

  const aoSalvar = (event) => {
    event.preventDefault()
    setTitle('')
    setDescription('')
  }

  const filterList = (filtro) => {
    setCheckbox(filtro)
  }

  useEffect(() => {
    if (checkbox === "todas") {
      setFilteredList(taskList)
    } else if (checkbox === "completas") {
      setFilteredList(taskList.filter((task) => task.completed))
    } else if (checkbox === "incompletas") {
      setFilteredList(taskList.filter((task) => !task.completed))
    }
  }, [taskList, checkbox])

  return (
    <section>
      <h1>To-do List</h1>
      <form onSubmit={aoSalvar}>
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
        <div>
          <Filtro
            value="todas"
            checked={checkbox === "todas"}
            onChange={filterList}
          >
            Todas
          </Filtro>
          <Filtro
            value="completas"
            checked={checkbox === "completas"}
            onChange={filterList}
          >
            Completas
          </Filtro>
          <Filtro
            value="incompletas"
            checked={checkbox === "incompletas"}
            onChange={filterList}
          >
            Incompletas
          </Filtro>
        </div>
        
      </form>
      <ul>
        {filteredList.sort((t1, t2) => t2.id  - t1.id).map((task) => {
          return <li key={task.id}>
              <Tarefa 
                {...task}
                toggleCompleted={toggleCompleted}
                onDeleting={deleteTask}/>
            </li>
        })}
      </ul>
    </section>
  )
}

export default App
