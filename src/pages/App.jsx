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
  return (
    <>
      <NavBar />
      <div className="bodyApp">
        <TodoCounter completed={35} total={50} />
        <TodoList>
          {defaultTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>
        <div>
          <CreateTodoButton />
          <InputAddTodo />
        </div>
      </div>
    </>
  )
}

export default App
