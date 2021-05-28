import Api from '../api'

interface IcreateTodo {
  name: string;
  email: string;
  description: string;
  status: string;
}

interface IDeleteTodo {
  id: string | number;
}

interface IUpdateTodo {
  id: string;
  status: string;
  back?: number;
}

export async function getAll(): Promise<any[]> {
  const { data } = await Api.get('/todolist')
  return data;
}

export async function create(object: IcreateTodo): Promise<object> {
  const { data } = await Api.post('/todolist', object)

  return data
}

export async function createNothing(): Promise<void> {
  await Api.post('/todolist/nothing')
}

export async function deleteItem({ id }: IDeleteTodo): Promise<void> {
  return new Promise<void>(async (resolve): Promise<void> => {
    await Api.delete(`/todolist/${id}`)
    resolve()
  })
}

export async function updateItem({ id, status, back }: IUpdateTodo): Promise<object> {
  const { data } = await Api.put(`/todolist/${id}`, { status, back })

  return data
}