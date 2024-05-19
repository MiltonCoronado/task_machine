import './CreateTodoButton.css';

const CreateTodoButton = ({ setOpenModal, loading }) => {
  return (
    <button 
    className={`CreateTodoButton ${loading && 'CreateTodoButton-hidden'}`}
    onClick={() => setOpenModal(state => !state)}//"setOpenModal" setea el estado de "openModal" de false a true y viceversa con la arrow Fn que retorna la negacion del valor actual.
    >
    +
    </button>
  )
};

export { CreateTodoButton };



