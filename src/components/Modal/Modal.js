import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useCallback, useEffect, useRef } from 'react';
import CustomTooltip from '../Tooltip/CustomTooltip';
import useStyles from './styles';

const Modal = ({ showModal, setShowModal, img }) => {
  const classes = useStyles();
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
    <section className={classes.modal} onClick={handleClick}>
      <div ref={modalRef} className={classes.modalContent}>
        <img src={img} className={classes.image} alt="Product in larger size" />
        <CustomTooltip title="Close modal">
          <IconButton
            type="button"
            variant="outlined"
            color="secondary"
            onClick={() => setShowModal(false)}
            className={classes.modalBtn}
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
