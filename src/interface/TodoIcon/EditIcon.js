import { TodoIcon } from './TodoIcon';

const EditIcon = ({ onEdit }) => {
  return (
    <TodoIcon
      type='edit'
      color='gray'
      actionClick={onEdit}
    />
  )
};

export { EditIcon };