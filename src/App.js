import React, {useState, useRef, useEffect} from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {

  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const checkTask = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  const addHandler = (e) => {
    const taskName = todoNameRef.current.value
    if (taskName === "") return 
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: taskName, complete: false}]
    })
    todoNameRef.current.value = null
  }

  const removeTodo = () => {
    const newTodos = todos.filter(todo => todo.complete === false)
    setTodos(newTodos)
  }

  return (
    <>
      <ToDoList todos={todos} checkTask={checkTask}/>
      <input ref={todoNameRef} type="text"></input>
      <button onClick={addHandler}>Add Task</button>
      <button onClick={removeTodo}>Remove Completed Tasks</button>
      <div>{todos.filter(todo => !todo.complete).length} Tasks Remaining</div>
    </>
  );
}

export default App;
