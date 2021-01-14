import { Button } from '@material-ui/core';
import { useCallback, useEffect, useRef } from 'react';

const Modal = ({ showModal, setShowModal, img }) => {
  const modalRef = useRef(null);

  const handleClick = useCallback(
    (e) => (modalRef.current.contains(e.target) ? null : setShowModal(false)),
    [setShowModal]
  );

  useEffect(() => {
    showModal
      ? document.addEventListener('mousedown', handleClick)
      : document.removeEventListener('mousedown', handleClick);

    return () => document.removeEventListener('mousedown', handleClick);
  }, [handleClick, showModal]);

  return (
    <section className="modal" onClick={handleClick}>
      <div ref={modalRef} className="modal-content">
        <img src={img} className="image" alt="Product image" />
      </div>
      <Button
        type="button"
        variant="contained"
        color="secondary"
        onClick={() => setShowModal(false)}
        className="modalBtn"
      >
        Close Modal
      </Button>
    </section>
  );
};

export default Modal;
