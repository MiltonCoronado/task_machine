import { TodoIcon } from './TodoIcon';

const DeleteIcon = ({ onDelete }) => {
  return (
    <TodoIcon
      type='delete'
      color='gray'
      checkOrDelete={onDelete}
    />
  )
};

export { DeleteIcon };