import checksvg from '../assets/completeicon.svg'
import deletesvg from '../assets/deleteicon.svg'
import '../css/TodoIcon.css'

const CheckIcon = () => <img src={checksvg} alt="check icon" />
const DeleteIcon = () => <img src={deletesvg} alt="delete icon" />

const iconTypes = {
  check: (color) => <CheckIcon className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteIcon className="Icon-svg" fill={color} />,
}

const TodoIcon = ({ type, color }) => {
  return (
    <span className={`Icon-container Icon-container-${type}`}>
      {iconTypes[type](color)}
    </span>
  )
}

export { TodoIcon }
