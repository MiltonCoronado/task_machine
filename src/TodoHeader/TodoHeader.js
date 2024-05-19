import { Children, cloneElement } from 'react';

const TodoHeader = ({ children, loading }) => {
  return (
    <header>
      {
        Children
        .toArray(children)//toArray(). Este método se utiliza para convertir los hijos de un componente en un array, es exclusivo de "React.Children.toArray()" de la libreria React, mas no de javascript nativo.
        .map(item => cloneElement(item, {loading}))
      }
    </header>
  )
};

export { TodoHeader };
