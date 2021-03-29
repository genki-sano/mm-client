import React from 'react'
import Alert from '@material-ui/lab/Alert'
import Wrapper from '@material-ui/core/Snackbar'
import { useDispatch, useSelector } from 'lib/hooks'
import { actions } from 'lib/store/slices'

export const Snackbar: React.FC = () => {
  const { isOpen, alertType, alertText } = useSelector(
    (store) => store.uiSnackbar,
  )

  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(actions.closeSnackbar())
  }

  if (!alertType || alertText === '') {
    return <></>
  }

  return (
    <Wrapper open={isOpen} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        elevation={6}
        variant="filled"
        severity={alertType}
        onClose={handleClose}
      >
        {alertText}
      </Alert>
    </Wrapper>
  )
}
