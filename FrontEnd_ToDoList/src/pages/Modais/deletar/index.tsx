import React, { useCallback } from 'react'
import './styles.css'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface IReceived {
  setIsDelete(isBoolean: boolean): any;
  handleDeleteItem(id: number | string | undefined): any
  isDelete: boolean;
  id: number | string | undefined
}

const ModalNewTodo: React.FC<IReceived> = ({ setIsDelete, isDelete, handleDeleteItem, id }: IReceived) => {
  const handleDelete = useCallback(() => {
    handleDeleteItem(id)
    setIsDelete(!isDelete)
  }, [id, isDelete, handleDeleteItem, setIsDelete])
  return (
    <Dialog
      open={isDelete}
      onClose={() => setIsDelete(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Excluir tarefa"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Voce deseja realmente excluir essa tarefa ?
  </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={()=> setIsDelete(false)} color="primary">
          Cancelar
  </Button>
        <Button onClick={handleDelete} color="primary" autoFocus>
          Sim
  </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ModalNewTodo