import React, { useCallback, useEffect, useState } from 'react';
import { MdBorderColor, MdInsertChart, MdCloudDone } from 'react-icons/md'
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Container from '@material-ui/core/Container';
import { createNothing, getAll } from '../../services/todo'
import ListCards from '../List';
import './style.css'
import { toast } from 'react-toastify';

const Home: React.FC = () => {
  const [todoCreated, setTodoCreated] = useState<any[]>([])
  const [todoDoing, setTodoDoing] = useState<any[]>([])
  const [todoCompleted, setTodoCompleted] = useState<any[]>([])
  const [isNothing, setIsNothing] = useState<boolean>(false)

  useEffect(() => {
    async function getAllTodo() {
      try {
        const response: any[] | undefined = await getAll()
        const created = response.filter(cre => cre.status === "created")
        const doing = response.filter(cre => cre.status === "doing")
        const completed = response.filter(cre => cre.status === "completed")

        setTodoCreated(created)
        setTodoDoing(doing)
        setTodoCompleted(completed)

        if (!created.length && !doing.length) {
          setIsNothing(true)
        } else {
          setIsNothing(false)
        }

      } catch (error) {
        console.log(error.message)
      }
    }
    getAllTodo()
  }, [])



  const updateCreate = useCallback(async (list) => {
    try {
      setTodoCreated(list)
    } catch (error) {
      toast.error("Error ao criar os cardes aleatorios")
    }

  }, [])

  const handleCreateRandomCard = useCallback(async () => {
    try {
      await createNothing()
      window.location.reload()
    } catch (error) {
      toast.error("Error ao criar os cardes aleatorios")
    }

  }, [])
  return (
    <React.Fragment>
      <Container fixed id="container">
        <Typography component="div" style={{ backgroundColor: '#239CC1', height: '100vh' }} />
        <ListCards setIsNothing={setIsNothing} setTodoCreated={setTodoCreated} updateCreate={updateCreate} setTodoDoing={setTodoDoing} List={todoCreated} Icon={MdBorderColor} todoCreated={todoCreated} todoDoing={todoDoing} title="Criado" />
        <ListCards setIsNothing={setIsNothing} setTodoCompleted={setTodoCompleted} setTodoCreated={setTodoCreated} todoDoing={todoDoing} todoCreated={todoCreated} todoCompleted={todoCompleted} List={todoDoing} Icon={MdInsertChart} title="Fazendo" />
        <ListCards setIsNothing={setIsNothing} setTodoDoing={setTodoDoing} List={todoCompleted} todoDoing={todoDoing} todoCreated={todoCreated} Icon={MdCloudDone} title="Feito" />
      </Container>
      {isNothing && (
        <Fab variant="extended" color="primary" style={{position: "absolute", top: 150, left: 140}} onClick={handleCreateRandomCard} >
          <AddIcon />
       Estou sem tarefas
        </Fab>
      )}
      </React.Fragment>
  )
}

export default Home