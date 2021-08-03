import React from 'react';
import Delete from '../assets/images/del-pop.svg';
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <a onClick={handleClose} className="close-icon">
          <img src={Delete}></img>
        </a>
        {children}
      </section>
    </div>
  );
};
export default Modal;
