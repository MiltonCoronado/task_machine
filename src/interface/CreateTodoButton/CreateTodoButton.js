import './CreateTodoButton.css';

const CreateTodoButton = ({ actionClick, loading }) => {
  return (
    <button 
    className={`CreateTodoButton ${loading && 'CreateTodoButton-hidden'}`}
    onClick={actionClick}
    >
    +
    </button>
  )
};

export { CreateTodoButton };



