import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import propTypes from 'prop-types';

const Alert = (props) => <MuiAlert {...props} variant='filled' elevation={6} />;

const Toast = ({ open, handleClose, severity, toastMessage }) => {
  return (
    <div>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity={severity}>
          {toastMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

Toast.defaultProps = {
  serverity: 'success',
};

Toast.propTypes = {
  open: propTypes.bool.isRequired,
  handleClose: propTypes.func.isRequired,
  serverity: propTypes.string,
  toastMessage: propTypes.string.isRequired,
};
export default Toast;
