import { useStateful } from './useStateful';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TodosLoading } from '../TodosLoading/TodosLoading';
import { TodosError } from '../TodosError/TodosError';
import { EmptyTodos } from '../EmptyTodos/EmptyTodos';
import { TodoForm } from '../TodoForm/TodoForm';
import { TodoHeader } from '../TodoHeader/TodoHeader';
import { Modal } from '../Modal/Modal';
import { ChangeAlertWithStorageListener } from '../ChangeAlert/ChangeAlert';

const App = () => {
  const {
    error,
    searchedTodos,
    openModal,
    completedTodos,
    totalTodos,
    searchValue,
    loading,
    addTodo,
    completeTodo,
    deleteTodo,
    setOpenModal,
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
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />

      <CreateTodoButton
        setOpenModal={setOpenModal}
        loading={loading}
      />

      {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <ChangeAlertWithStorageListener
        sincronizeTodo={sincronizeTodo}
      />
    </>
  )
};
  
export { App };



