import { useNavigate } from 'react-router-dom';
import { useStateful } from '../useStateful';
import { TodoCounter } from '../../interface/TodoCounter/TodoCounter';
import { TodoSearch } from '../../interface/TodoSearch/TodoSearch';
import { TodoList } from '../../interface/TodoList/TodoList';
import { TodoItem } from '../../interface/TodoItem/TodoItem';
import { CreateTodoButton } from '../../interface/CreateTodoButton/CreateTodoButton';
import { TodosLoading } from '../../interface/TodosLoading/TodosLoading';
import { TodosError } from '../../interface/TodosError/TodosError';
import { EmptyTodos } from '../../interface/EmptyTodos/EmptyTodos';
import { TodoHeader } from '../../interface/TodoHeader/TodoHeader';
import { ChangeAlertWithStorageListener } from '../../interface/ChangeAlert/ChangeAlert';

const HomePage = () => {
  const navigate = useNavigate();

  const {
    error,
    searchedTodos,
    completedTodos,
    totalTodos,
    searchValue,
    loading,
    completeTodo,
    deleteTodo,
    setSearchValue,
    sincronizeTodo,
  } = useStateful();

  return (
    <>
      <TodoHeader
        loading={loading}
      >
        <TodoCounter
          completedTodos={completedTodos}
          totalTodos={totalTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        totalTodos={totalTodos}
        onError={() => <TodosError/>}
        onLoading={() => <TodosLoading/>}
        onEmptyTodos={() => <EmptyTodos/>}
        onEmtySearchResults={
          (searchText) => <p>No hay resultados para {searchText}</p>
        }
        render={item => (
          <TodoItem
            key={item.id}
            text={item.text}
            completed={item.completed}
            onEdit={() => navigate(
              '/edit/' + item.id, 
              { state: {item} },
            )}
            onComplete={() => completeTodo(item.id)}
            onDelete={() => deleteTodo(item.id)}
          />
        )}
      />

      <CreateTodoButton
        actionClick={() => navigate('/new')}
        loading={loading}
      />

      {/* {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )} */}

      <ChangeAlertWithStorageListener
        sincronizeTodo={sincronizeTodo}
      />
    </>
  )
};
  
export { HomePage };