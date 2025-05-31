import { Children, useState } from 'react'
import './App.css'
import Input from './components/Input'
import Textarea from './components/Textarea'
import Botao from './components/Botao'
import Tarefa from './components/Tarefa'

function App() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [taskList, setTaskList] = useState([])
  const [countId, setCountId] = useState(1)
  // const [completed, setCompleted] = useState(false)

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
        completed: false
      }
    
    setTaskList((oldTaskList) => {
     return [...oldTaskList, newTask]
    })
    setCountId((countId) => countId + 1)
    console.log(taskList);
    
    setTitle('')
    setDescription('')
  }

  /* const handleCompleted = (taskCompleted) => {
    console.log(taskList.some(task => task.id === taskCompleted.id));
    
    let taskSelecionada = taskList.some(task => task.id === taskCompleted.id)

    if (taskSelecionada) {
      return setTaskList(
        taskList[taskList.indexOf(taskCompleted)] = {
          ...taskCompleted,
          completed: setCompleted(!completed)
        }
      )
    }
  } */

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
      <ul>
        {taskList.sort((t1, t2) => t2.id  - t1.id).map((task) => {
          return <li>
              <Tarefa 
                {...task} 
                // completed={completed} 
                toggleCompleted={toggleCompleted}
                key={task.id} onDeleting={deleteTask}/>
            </li>
        })}
      </ul>
    </section>
  )
}

export default App
