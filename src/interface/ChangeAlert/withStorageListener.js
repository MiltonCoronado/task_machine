import { useEffect, useState } from 'react';

const withStorageListener = (WrappedComponent) => {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    useEffect(() => {
      const onStorage = (event) => {
        if (event.key === "TODOS_V2") {
          setStorageChange(true);
          }
        };

      window.addEventListener("storage", onStorage);
      console.log('useEffect(withStorageListener) reinisializado because se monto y desmonto el componente de ruta')
      return () => {
        window.removeEventListener("storage", onStorage);//por que se remueve el listener???????????????????????????????
      };
    }, []);

    const toggleShow = () => {
      props.sincronizeTodo();
      setStorageChange(false);
    };

    return <WrappedComponent
      show={storageChange}
      toggleShow={toggleShow}
    />
  };
};

export { withStorageListener };