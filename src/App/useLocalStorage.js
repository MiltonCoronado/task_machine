import { useEffect, useState } from 'react';

const useLocalStorage = (itemName, initialValue) => {//Estos; son PARAMETROS, no PROPS!!!
  const [sincronizedItem, setSincronizedItem] = useState(true)
  const [item, setItem] = useState(initialValue);//el valor inicial es un array vacio, al setear este "valor inicial" este cambia y es almacenado en el estado con persistensia de datos, ya que el argumento de "setItem()" es "parsedItem" y este proviene de "localStorageItem" que viene de "const localStorageItem = localStorage.getItem(itemName)"
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);//"localStorage" solo maneja "strings" no estructuras de datos complejas, por ello se tienen que convertir primero en strings antes de guardarlas en el localStorage.
        let parsedItem;
  
        if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));//JSON.stringify(): Este método convierte un objeto JavaScript o un valor en una cadena de texto JSON. Puede manejar objetos, arrays, strings, números, booleanos y null.
        } else {
         parsedItem = JSON.parse(localStorageItem);//JSON.parse(): Este método analiza una cadena de texto JSON y la convierte en un objeto JavaScript correspondiente al valor o estructura de datos descritos en la cadena JSON.
         setItem(parsedItem);
        };

        setLoading(false);
        setSincronizedItem(true);

      } catch(error) {
        setLoading(false);
        setError(true);
      };

    }, 2000)
  },[sincronizedItem]);

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  };

  const saveActionStorage = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveActionStorage, 
    loading, 
    error,
    sincronizeItem,
  };
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