import React, { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { create } from '../../../services/todo'
import { test } from '../../../services/email'
import './styles.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

interface IReceived {
  setIsCreate(isBoolean: boolean): any;
  isCreate: boolean;
}

const ModalNewTodo: React.FC<IReceived> = ({ setIsCreate, isCreate }: IReceived) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('created')




  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus((event.target as HTMLInputElement).value);
  };

  const handleCreate = useCallback(async () => {
    try {
      if (!name || !email || !description) {
        throw new Error('Preencha todos os campos para criar o card')
      }

      // eslint-disable-next-line no-useless-escape
      if (!/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,})+)$/.test(email)) {
        throw new Error('O formato do email não é valido')
      }

      const response = await test(email)

      if (!response.smtp_check) {
        throw new Error('O email não é valido')
      }

      await create({ name, email, description, status })

      toast.success('Todo Criada com sucesso')
      window.location.reload()
    } catch (error) {
      toast.error(error.message)

    }

  }, [name, email, description, status])
  return (

    <Dialog open={isCreate} onClose={() => setIsCreate(!isCreate)} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Novo Card</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Insira as informacoes abaixo
</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          type="text"
          fullWidth
        />
        <TextField

          margin="dense"
          id="name"
          label="example@saipos.com.br"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          fullWidth
        />
        <TextField

          margin="dense"
          id="name"
          label="Digite a descricao"
          onChange={(e) => setDescription(e.target.value)}
          type="password"
          fullWidth
          multiline
        />


        <FormControl component="fieldset">
          <FormLabel component="legend">Status</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value={status} onChange={handleChange}>
            <FormControlLabel value="created" control={<Radio />} label="Criado" />
            <FormControlLabel value="doing" control={<Radio />} label="Fazendo" />
            <FormControlLabel value="completed" control={<Radio />} label="Feito" />
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setIsCreate(!isCreate)} color="primary">
          Cancelar
</Button>
        <Button onClick={handleCreate} color="primary">
          Criar card
</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ModalNewTodo