import { ReactComponent as CheckSVG} from '../SVG/check.svg'
import { ReactComponent as DeleteSVG } from '../SVG/delete.svg'
import './TodoIcon.css'

const iconTypes = {
  'check': (color) => <CheckSVG className='Icon-svg' fill={color}/>,
  'delete': (color) => <DeleteSVG className='Icon-svg' fill={color}/>,
}

const TodoIcon = ({ type, color, checkOrDelete }) => {
  return (
    <span
    className={`Icon-container Icon-container-${type}`}
    onClick={checkOrDelete}//checkOrDelete contienen 2 props que son "onComplete" y "onDelete", las cuales se ejecutan dependiendo del valor de la prop en "TodoItem"
    >
      {iconTypes[type](color)}
    </span>
  )
};

export { TodoIcon };