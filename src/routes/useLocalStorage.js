import { useEffect, useReducer } from 'react';

const useLocalStorage = (itemName, initialValue) => {//Estos; son PARAMETROS, no PROPS!!!
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));

  const {sincronizedItem, error, loading, item} = state;

  const onError = (error) => dispatch({ 
    type: actionTypes.error,
    payload: error, 
  });

  const onSuccess = (parsedItem) => dispatch({
    type: actionTypes.success,
    payload: parsedItem,
  });

  const onSave = (newItem) => dispatch({
    type: actionTypes.save,
    payload: newItem,
  });

  const onSincronize = () => dispatch({
    type: actionTypes.sincronize,
  });


  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);//"localStorage" solo maneja "strings" no estructuras de datos complejas, por ello se tienen que convertir primero en strings antes de guardarlas en el localStorage.
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));//JSON.stringify(): this método convierte un objeto JavaScript o un valor en una cadena de texto JSON. Puede manejar objetos, arrays, strings, números, booleanos y null.
        } else {
          parsedItem = JSON.parse(localStorageItem);//JSON.parse(): Este método analiza una cadena de texto JSON y la convierte en un objeto JavaScript correspondiente al valor o estructura de datos descritos en la cadena JSON.
        };
        
        console.log('useEffect(useLocalStorage) reinisializado porque se monto y desmonto el componente de ruta')
        onSuccess(parsedItem);
        
      } catch(error) {
        onError(error);
      };

    }, 2000)
  },[sincronizedItem]);

  const sincronizeItem = () => {
    onSincronize();
  };

  const saveActionStorage = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    }catch(error){
      onError(error);
    }
  };

  return {
    item,
    saveActionStorage, 
    loading, 
    error,
    sincronizeItem,
  };
};

const initialState = ({ initialValue }) => ({
  sincronizedItem: true,
  error: false,
  loading: true,
  item: initialValue
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sincronize: 'SINCRONIZE',
};

const reducer = (state, action) => {
  switch(action.type) {
    case actionTypes.error:
      return {
        ...state,
        loading: false,
        error: true,
      }
    case actionTypes.success:
      return {
        ...state,
        error: false,
        loading: false,
        sincronizedItem: true,
        item: action.payload,
      }
    case actionTypes.save:
      return {
        ...state,
        item: action.payload
      } 
    case actionTypes.sincronize:
      return {
        ...state,
        loading: true,
        sincronizedItem: false,
      }
    default:
      return initialState;   
  }
};

export { useLocalStorage };


// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar agua', completed: false},
//   {text: 'Pasear al perritu', completed: true},
//   {text: 'lalala by mac miller', completed: false},
//   {text: 'goo goo dolls - iris', completed: true},
//   {text: 'back to school - deftones', completed: false},
// ];