import { TodoIcon } from './TodoIcon';

const DeleteIcon = ({ onDelete }) => {
  return (
    <TodoIcon
      type='delete'
      color='gray'
      actionClick={onDelete}
    />
  )
};

export { DeleteIcon };