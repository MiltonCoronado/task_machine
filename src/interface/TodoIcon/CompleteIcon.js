import { TodoIcon } from './TodoIcon';

const CompleteIcon = ({ completed, onComplete }) => {
  return (
    <TodoIcon
      type='check'
      color={completed ? 'green' : 'gray'}
      actionClick={onComplete}
    />
  )
};

export { CompleteIcon };