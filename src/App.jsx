import './App.css'

function App() {

  return (
    <>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
    </>
  )
}

function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Llorar con la llorona</p>
      <span>X</span>
    </li>
  )
}

export default App
