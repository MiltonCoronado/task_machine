import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TodoForm.css';

function TodoForm(props) {
  const navigate = useNavigate();
  const [newTodoValue, setNewTodoValue] = useState(props.defaultTodoText || '');

  const myOnChangeEventReceiver = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    navigate('/');
  };
  const myOnsubmitEventReceiver = (event) => {
    event.preventDefault();
    props.submitEvent(newTodoValue);//Esta es la sintaxis del llamado a una funcion desde una render prop. Que ejecuta el llamado real de la Fn desde "EditTodoPage" && "NewTodoPage".
    navigate('/');
  };

  return (
    <form onSubmit={myOnsubmitEventReceiver}>
      <label>{props.label}</label>
      <textarea
        value={newTodoValue}
        onChange={myOnChangeEventReceiver}
        placeholder="Cortar la cebolla oara el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}//esta Fn no va envuelta en una arrow function ya que no ¡se llama asi misma "onCancel()"!
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          {props.submitText}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };