import { useParams } from 'react-router-dom';
import { TodoForm } from '../../interface/TodoForm/TodoForm';
import { useStateful } from '../useStateful';

const EditTodoPage = () => {
  const { editTodo } = useStateful();
  const params = useParams();
  const id = Number(params.id)//Los parametros de una url por defecto son textos, para asegurar que todo funcione bien lo convertimos a un numero con el objeto Number(); de javascipt.

  return (
    <TodoForm 
      label='Edita tu TODO'
      submitText='Editar'
      submitEvent={(newText) => editTodo(id, newText)}
    />
  )
};

export { EditTodoPage };


