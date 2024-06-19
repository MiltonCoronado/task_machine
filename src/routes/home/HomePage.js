import { useStateful } from '../useStateful';
import { TodoCounter } from '../../interface/TodoCounter/TodoCounter';
import { TodoSearch } from '../../interface/TodoSearch/TodoSearch';
import { TodoList } from '../../interface/TodoList/TodoList';
import { TodoItem } from '../../interface/TodoItem/TodoItem';
import { CreateTodoButton } from '../../interface/CreateTodoButton/CreateTodoButton';
import { TodosLoading } from '../../interface/TodosLoading/TodosLoading';
import { TodosError } from '../../interface/TodosError/TodosError';
import { EmptyTodos } from '../../interface/EmptyTodos/EmptyTodos';
import { TodoForm } from '../../interface/TodoForm/TodoForm';
import { TodoHeader } from '../../interface/TodoHeader/TodoHeader';
import { Modal } from '../../interface/Modal/Modal';
import { ChangeAlertWithStorageListener } from '../../interface/ChangeAlert/ChangeAlert';

const HomePage = () => {
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
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
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
  
export { HomePage };