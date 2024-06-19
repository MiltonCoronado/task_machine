import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useStateful = () => {
  const {
    item: todos,
    saveActionStorage,
    sincronizeItem: sincronizeTodo,
    loading,
    error,
  } = useLocalStorage('TODOS_V2', []);

  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter(item => !!item.completed).length;//DOBLE NEGACION: convierte cualquier dato en un BOLEANO!!!
  const totalTodos = todos.length;//ESTADO DERIVADO: convertir el estado en otro tipo de dato guardandolo en una variable!!!

  const searchedTodos = todos.filter(//filtra el array todos y retorna un nuevo array segun la condicion. 
    item => {
      const todoText = item.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);//el metodo includes() con el argumento un ('') siempre retorna TRUE. es un string method.
    }
  );

  const addTodo = (text) => {
    const id = newTodoId(todos);
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
      id,
    })
    saveActionStorage(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      copyItem => copyItem.id === id//finIndex() retorna un index deacuerdo a la condicion. Aqui "copyTodos.text" recorre todo el array de obj. copiados y "text" es un solo objeto del array original enviado por argumento al ser seleccionado ya en la interfaz, al ser comparados retorna en index de "copyTodos" donde se hizo match. 
    );
    newTodos[todoIndex].completed = true;
    saveActionStorage(newTodos);//dentro de "saveActionInLocaStorage()" se encuantra el actualizador del estado "setTodos".
    };
  

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      copyItem => copyItem.id === id
    );
    newTodos.splice(todoIndex, 1);
    saveActionStorage(newTodos);
  };

  return {
    loading,
    error,
    searchValue,
    completedTodos,
    totalTodos,
    searchedTodos,
    openModal,
    setSearchValue,
    addTodo,
    deleteTodo,
    completeTodo,
    setOpenModal,
    sincronizeTodo,
  } 
};

const newTodoId = (todoList) => {
  if (!todoList.length) return 1;

  const idList = todoList.map(item => item.id);//por que "item.id" y no "item[id]" si es un array de objetos??????????????????????????????????????????????????????
  const idMax = Math.max(...idList)
  return idMax + 1;
};

export { useStateful };