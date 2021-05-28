import React, { useCallback, useEffect, useState } from 'react'
import ModalNewTodo from '../Modais/NovoCard'
import ModalDeleteTodo from '../Modais/deletar'
import ModalPasswordTodo from '../Modais/Password'
import { deleteItem, updateItem } from '../../services/todo'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './styles.css'
import Container from '@material-ui/core/Container';
import { toast } from 'react-toastify'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

interface IReceive {
  title: string;
  Icon: any;
  List: any[];
  todoCreated?: any;
  todoCompleted?: any;
  todoDoing?: any;
  setTodoCompleted?: any;
  setTodoDoing?: any;
  setTodoCreated?: any;
  setIsNothing?: any;
  updateCreate?: any;
}

const Todo: React.FC<IReceive> = ({ title, Icon, List, setTodoCompleted, todoCompleted, setTodoCreated, todoCreated, setTodoDoing, todoDoing, setIsNothing, updateCreate }: IReceive) => {
  const [isCreate, setIsCreate] = useState(false)
  const [isDelete, setIsDelete] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const [listArray, setListArray] = useState(List)
  const [id, setId] = useState<number>()
  const [index, setIndex] = useState<number>()

  useEffect(() => {
    setListArray(List)
  }, [List, todoCreated, todoDoing, todoCompleted, setTodoCreated])

  const handleChangeOnDrag = useCallback((drag) => {
    if (!drag.destination) return;
    const items = Array.from(listArray)
    const [reorderedItem] = items.splice(drag.source.index, 1)
    items.splice(drag.destination.index, 0, reorderedItem)

    setListArray(items)
  }, [listArray])

  const handleDeleteItem = useCallback(async (id: number | string) => {
    try {
      if (id) {
        await deleteItem({ id })
        const list = listArray.filter(item => item.id !== id)
        setListArray(list)
        updateCreate(list)
        if (!list?.length && !todoDoing?.length) setIsNothing(true)
      }
    } catch (error) {
      console.log(error.message)
    }

  }, [listArray, setIsNothing, todoDoing, updateCreate])

  const handleOpenModalDelete = useCallback(async (id: any) => {
    setId(id)
    setIsDelete(!isDelete)
  }, [isDelete])

  const handleOpenModalPassword = useCallback(async (id: any, index: any) => {
    const finditem = listArray.find(x => x.id === id)

    if (finditem.back >= 2) {
      return toast.error("Você já atingiu a quantidade maxima de mudanças")
    }

    setId(id)
    setIndex(index)
    setIsPassword(!isPassword)
  }, [listArray, isPassword])

  const handleBackCard = useCallback(async (id, index) => {
    const finditem = listArray.find(x => x.id === id)

    if (finditem.status === "doing") {
      updateItem({ id, status: 'created' })

      const item = listArray[index]
      const newListArray = listArray.splice(index, 1)
      setListArray(newListArray)
      setTodoCreated([...todoCreated, { ...item, status: 'created' }])
    }
    if (finditem.status === "completed" && finditem.back !== 2) {
      updateItem({ id, status: 'doing', back: finditem.back + 1 })

      const item = listArray[index]
      const newListArray = listArray.splice(index, 1)
      setListArray(newListArray)
      setTodoDoing([...todoDoing, { ...item, status: 'doing', back: finditem.back + 1 }])
      if (!todoCreated?.length && !todoDoing?.length) setIsNothing(false)
    }
  }, [listArray, setTodoCreated, todoCreated, setTodoDoing, setIsNothing, todoDoing])

  const handleNextCard = useCallback(async (id, index) => {

    const finditem = listArray.find(x => x.id === id)

    if (finditem.status === "created") {
      updateItem({ id, status: 'doing' })

      const item = listArray[index]
      const newListArray = listArray.splice(index, 1)
      setListArray(newListArray)
      setTodoDoing([...todoDoing, { ...item, status: 'doing' }])
    }

    if (finditem.status === "doing") {
      updateItem({ id, status: 'completed' })

      const item = listArray[index]
      const newListArray = listArray.splice(index, 1)
      setListArray(newListArray)
      setTodoCompleted([...todoCompleted, { ...item, status: 'completed' }])
      if (!todoCreated?.length && !todoDoing?.length) setIsNothing(true)
    }
  }, [listArray, setTodoDoing, todoDoing, todoCreated, setIsNothing, setTodoCompleted, todoCompleted])
  return (
    <>
      {isCreate && <ModalNewTodo isCreate={isCreate} setIsCreate={setIsCreate} />}
      {isDelete && <ModalDeleteTodo isDelete={isDelete} setIsDelete={setIsDelete} handleDeleteItem={handleDeleteItem} id={id} />}
      {isPassword && <ModalPasswordTodo isPassword={isPassword} setIsPassword={setIsPassword} handleBackCard={handleBackCard} id={id} index={index} />}
      <Container className="toDo">
        <Paper square>
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            aria-label="disabled tabs example"
          >
            {title === 'Criado' && (
              <Fab color="primary" aria-label="add" size="small" onClick={() => setIsCreate(!isCreate)}>
                <AddIcon />
              </Fab>
            )}
            <Tab label={title} />
          </Tabs>
        </Paper>

        <DragDropContext onDragEnd={handleChangeOnDrag}>
          <Droppable droppableId="itensComponents">
            {(provided) => (

              <React.Fragment>
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                    {listArray.map((item, index) => {
                      return (
                        <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                          {(provided) => (
                            <React.Fragment>

                              <Card {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} key={item.id} style={{ marginTop: 8 }}>
                                <CardActionArea>

                                  <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                      {item.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                      {item.description}
                                    </Typography>
                                  </CardContent>
                                </CardActionArea>

                                {title === 'Criado' && (
                                  <CardActions>
                                    <Button size="small" color="primary" onClick={() => handleOpenModalDelete(item.id)}>
                                      EXCLUIR CARTAO
                                 </Button>
                                    <Button size="small" color="primary" onClick={() => handleNextCard(item.id, index)}>
                                      FAZER
                                 </Button>
                                  </CardActions>
                                )}
                                {title === 'Fazendo' && (
                                  <CardActions>
                                    <Button size="small" color="primary" onClick={() => handleBackCard(item.id, index)}>
                                      RETORNAR
                                 </Button>
                                    <Button size="small" color="primary" onClick={() => handleNextCard(item.id, index)}>
                                      CONCLUIR TAREFA
                                 </Button>
                                  </CardActions>
                                )}
                                {title === 'Feito' && (
                                  <CardActions>
                                    <Button size="small" color="primary" onClick={() => handleOpenModalPassword(item.id, index)}>
                                      VOLTAR
                                 </Button>

                                  </CardActions>
                                )}
                              </Card>
                            </React.Fragment>

                          )
                          }
                        </Draggable>
                      )
                    })}
                    {provided.placeholder}
                  </ul>
            
              </React.Fragment>

            )
            }
          </Droppable>
        </DragDropContext>
      </Container>
    </>
  )
}

export default Todo