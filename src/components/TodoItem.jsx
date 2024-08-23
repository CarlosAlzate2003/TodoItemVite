import '../css/TodoItem.css'

function TodoItem({ text, completed }) {
  return (
    <li>
      <span>V</span>
      <p>{text}</p>
      <span>X</span>
    </li>
  )
}

export { TodoItem }
