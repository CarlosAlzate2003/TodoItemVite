import React from 'react'
import { TodoCounter } from '../components/TodoCounter'
import { TodoItem } from '../components/TodoItem'
import { CreateTodoButton } from '../components/CreateTodoButton'
import { TodoList } from '../components/TodoList'
import { InputAddTodo } from '../components/InputAddTodo'
import { NavBar } from '../components/NavBar'
import '../css/App.css'

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Terminar el curso', completed: false },
  { text: 'Lavar el coche', completed: false },
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState('')

  const completedTodos = todos.filter((todo) => !!todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase())
  })

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text == text)
    newTodos[todoIndex].completed = true
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text == text)
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  return (
    <>
      <NavBar />
      <div className="bodyApp">
        <TodoCounter completed={completedTodos} total={totalTodos} />
        {completedTodos === totalTodos && totalTodos > 0 && (
          <p className="sucessfull">
            ¡Felicidades, has completado todas las tareas!
          </p>
        )}
        <TodoList>
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <div>
          <CreateTodoButton />
          <InputAddTodo
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
      </div>
    </>
  )
}

export default App
