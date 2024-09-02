import '../css/TodoItem.css'
import { TodoIcon } from './TodoIcon'
import { useState } from 'react'

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li>
      <HoverableIcon type="check" color="#5eff03" onClick={onComplete} />
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <HoverableIcon type="delete" color="red" onClick={onDelete} />
    </li>
  )
}

const HoverableIcon = ({ type, color, onClick }) => {
  const [hover, setHover] = useState(false)

  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        transform: hover ? 'scale(1.1)' : 'scale(0.9)',
        transition: 'transform 0.3s ease',
      }}
    >
      <TodoIcon type={type} color={color} />
    </span>
  )
}

export { TodoItem }
