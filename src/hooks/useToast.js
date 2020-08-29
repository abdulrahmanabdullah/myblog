import { useState } from 'react';

const useToast = () => {
  const [toastState, setToastState] = useState({
    open: false,
    message: '',
    style: '',
  });
  //handle open or closed toast
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setToastState({ open: false });
  };

  const shareContent = (id) => {
    navigator.clipboard
      .writeText(`http://r&js.com/${id}`)
      .then(() => {
        setToastState({
          open: true,
          message: 'Copied',
          style: 'success',
        });
      })
      .catch((err) => {
        setToastState({
          open: true,
          message: err.message,
          style: 'error',
        });
      });
  };

  return {
    toastState,
    shareContent,
    handleClose,
  };
};
export default useToast;
