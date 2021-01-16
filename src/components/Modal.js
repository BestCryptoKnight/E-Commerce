import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useCallback, useEffect, useRef } from 'react';
import CustomTooltip from './CustomTooltip';

const Modal = ({ showModal, setShowModal, img }) => {
  const modalRef = useRef(null);

  const handleClick = useCallback(
    (e) => (modalRef.current.contains(e.target) ? null : setShowModal(false)),
    [setShowModal]
  );

  const handleEscape = useCallback(
    (e) => (e.key === 'Escape' ? setShowModal(false) : null),
    [setShowModal]
  );

  const addEventListeners = useCallback(() => {
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClick);
  }, [handleClick, handleEscape]);

  const removeEventListeners = useCallback(() => {
    document.removeEventListener('mousedown', handleClick);
    document.removeEventListener('keydown', handleEscape);
  }, [handleClick, handleEscape]);

  useEffect(() => {
    showModal ? addEventListeners() : removeEventListeners();

    return () => removeEventListeners();
  }, [addEventListeners, removeEventListeners, showModal]);

  return (
    <section className="modal" onClick={handleClick}>
      <div ref={modalRef} className="modal-content">
        <img src={img} className="image" alt="Product in larger size" />
        <CustomTooltip title="Close modal">
          <IconButton
            type="button"
            variant="outlined"
            color="secondary"
            onClick={() => setShowModal(false)}
            className="modalBtn"
            aria-label="Close modal"
          >
            <CloseIcon />
          </IconButton>
        </CustomTooltip>
      </div>
    </section>
  );
};

export default Modal;
