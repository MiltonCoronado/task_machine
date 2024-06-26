import { TodoForm } from '../../interface/TodoForm/TodoForm';
import { useStateful } from '../useStateful';

const NewTodoPage = () => {
  const { addTodo } = useStateful();

  return (
    <TodoForm 
      label='Escribe tu nuevo TODO'
      submitText='Añadir'
      submitEvent={(text) => addTodo(text)}
    />
  )
};

export { NewTodoPage };