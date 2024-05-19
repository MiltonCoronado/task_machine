import { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = useState('');

  const myOnsubmitEventReceiver = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);//Est es una FN que cierra el modal al darle click al boton de añadir.
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const myOnChangeEventReceiver = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={myOnsubmitEventReceiver}//En React, cuando pasas una función a un manejador de eventos de un Form, como onSubmit. simplemente haces onSubmit={myOnsubmitEventReceiver}, y React se encarga de pasar el evento apropiadamente cuando se produce. asi dejando sin necesidad de llamar a la funcion con parentesis. "onSubmit={() => myOnsubmitEventReceiver(event)}"
    >
      <label>Esribe tu nuevo TODO</label>
      <textarea
        placeholder="Cortar cebolla para el almuerzo"
        value={newTodoValue}
        onChange={myOnChangeEventReceiver}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}//esta Fn no va envuelta en una arrow function ya que no ¡se llama asi misma "onCancel()"!
        >Cancelar</button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };