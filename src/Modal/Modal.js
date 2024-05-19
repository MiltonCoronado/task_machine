import { createPortal } from 'react-dom';
import './Modal.css';

const Modal = ({ children }) => {
  return createPortal(//Componente a teletransportar.
    <div className='ModalBackground'>
     {children}
    </div>,
    document.getElementById('modal')//nodo donde se rendizara.
  )
};

export { Modal };