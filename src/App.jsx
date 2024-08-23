import { TodoCounter } from './TodoCounter'
import { TodoItem } from './TodoItem'
import { CreateTodoButton } from './CreateTodoButton'
import { TodoList } from './TodoList'
import './App.css'

function App() {

  return (
    <>
      <TodoCounter/>
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>
      <CreateTodoButton/> 
    </>
  )
}

export default App
