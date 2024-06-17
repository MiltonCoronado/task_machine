import { ReactComponent as CheckSVG} from '../SVG/check.svg'
import { ReactComponent as DeleteSVG } from '../SVG/delete.svg'
import { ReactComponent as EditSVG } from '../SVG/edit.svg'
import './TodoIcon.css'

const iconTypes = {
  'check': (color) => <CheckSVG className='Icon-svg' fill={color}/>,
  'delete': (color) => <DeleteSVG className='Icon-svg' fill={color}/>,
  'edit': (color) => <EditSVG className='Icon-svg' fill={color}/>,
}

const TodoIcon = ({ type, color, actionClick }) => {
  return (
    <span
    className={`Icon-container Icon-container-${type}`}
    onClick={actionClick}//"actionClick" contienen 3 props que son "onComplete", "onDelete" y "onEdit", las cuales se ejecutan dependiendo del valor de la prop en "TodoItem"
    >
      {iconTypes[type](color)}
    </span>
  )
};

export { TodoIcon };