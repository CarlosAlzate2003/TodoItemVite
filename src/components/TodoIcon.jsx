import { ReactComponent as CheckSVG } from './CompleteIconSvg'
import { ReactComponent as DeleteSVG } from './DeleteIconSvg'
import '../css/TodoIcon.css'

const iconTypes = {
  check: (color) => <CheckSVG className="Icon-svg" color={color} />,
  delete: (color) => <DeleteSVG className="Icon-svg" color={color} />,
}

const TodoIcon = ({ type, color }) => {
  return (
    <span className={`Icon-container Icon-container-${type}`}>
      {iconTypes[type](color)}
    </span>
  )
}

export { TodoIcon }
