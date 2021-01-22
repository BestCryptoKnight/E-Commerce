import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 1,
    zIndex: 100,
    animation: '$fade 0.8s ease-out',
  },
  modalContent: {
    position: 'relative',
    background: 'rgb(230, 230, 230)',
    width: '80vw',
    height: '80vh',
    maxWidth: '866px',
    borderRadius: '0.25em',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  modalBtn: {
    position: 'absolute',
    top: '0.3em',
    right: '0.3em',
    background: 'rgb(240, 240, 240)',
    border: '2px solid rgb(204, 124, 124)',
    borderRadius: '0.5em',
    padding: '0.2em',
    color: 'rgb(192, 3, 3)',
    display: 'flex',
    alignItems: 'center',
    transition: 'border-color 0.3s ease-out, color 0.3s ease-out',
    zIndex: 100,
    cursor: 'pointer',

    '&:hover': {
      color: 'rgb(233, 2, 2)',
      borderColor: 'rgb(228, 54, 54)',
    },
  },

  '@keyframes fade': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
});
