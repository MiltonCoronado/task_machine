import { useLocation, useParams } from 'react-router-dom';
import { TodoForm } from '../../interface/TodoForm/TodoForm';
import { useStateful } from '../useStateful';

const EditTodoPage = () => {
  const location = useLocation();//con "useLocation()" podemos transferir informacion de un a ruta a otra. y que esa otra ruta pueda recibir esa informacion(aun falta informarme y estudiar mas sobre este Hook de react-router-dom). - Claro, el hook useLocation en React Router DOM versión 6 se utiliza para obtener información sobre la URL actual en tu aplicación. Es útil para condicionalmente renderizar contenido o realizar acciones basadas en la ruta actual del usuario. (GPT)
  const params = useParams();
  const id = Number(params.id)//Los parametros de una url por defecto son textos, para asegurar que sea un numero usamos el objeto Number(); de vanilla js.
  
  const { editTodo, getTodo, loading } = useStateful();

  let todoText;

  if(location.state?.item){//same: "location.state && location.state.todo"
    todoText = location.state.item.text;
  }else if(loading){//Cada vez que se cambia de páginas, estos componentes se desmontan y se vuelve a montar, lo que causa que el hook useLocalStorage se inicialice de nuevo. Cuando un componente se monta, useEffect se ejecuta al menos una vez, incluso si no hay cambios en sus dependencias. Por lo tanto "loading" se vuelve a ejecutar.
    return loading;
  }else{
    const objectTodo = getTodo(id);//"getTodo" se llama en la fase de renderizado inicial por estar en la logica del componente(por fuera del return), por ello que al cargar desde el "localStorage"(con 2 segundos de delay) todos los TODOS ya "getTodo" se ejecuto antes y trajo algo que no existia aun... por eso el "undefined". mientras que las otras Fns. se llaman por interaccion del usuario, después de que los datos están disponibles.  
    todoText = objectTodo.text
  };

  return (
    <TodoForm 
      label='Edita tu TODO'
      defaultTodoText={todoText}
      submitText='Editar'
      submitEvent={(newText) => editTodo(id, newText)}//Este es el llamado real a la ejecucion de la Fn en si. pero gracias a que es una render prop, este llamado a la Fn se pasa a otro componente(TodoForm) para al final ser llamado desde ahi(TodoForm) con la sintaxis de las render props.
    />
  )
};

export { EditTodoPage };


