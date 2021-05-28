import React, { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import './styles.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface IReceived {
  setIsPassword(isBoolean: boolean): any;
  handleBackCard(id: number | string | undefined, index: number | string | undefined): any
  isPassword: boolean;
  id: number | string | undefined;
  index: number | undefined;
}

const ModalNewTodo: React.FC<IReceived> = ({ isPassword, setIsPassword, handleBackCard, id, index }: IReceived) => {
  const [password, setPassword] = useState('')
  const handleIsBack = useCallback(() => {
    if (password !== "TrabalheNaSaipos") {
      return toast.error('A senha é invalida!')
    } else {
      handleBackCard(id, index)
      setIsPassword(!isPassword)
      return toast.success('Sucesso')
    }

  }, [id, index, handleBackCard, setIsPassword, isPassword, password])

  return (
    <Dialog open={isPassword} onClose={() => setIsPassword(!isPassword)} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Senha</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Precisamos que digite a senha do administrador
  </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Digite a senha"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsPassword(!isPassword)} color="primary">
          Cancelar
  </Button>
        <Button onClick={handleIsBack} color="primary">
          Confirmar
  </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ModalNewTodo