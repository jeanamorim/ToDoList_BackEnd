import CreateToDoList from "../../services/servicesToDoList/create";
import CreateNothing from "../../services/servicesToDoList/createNothing";
import Index from "../../services/servicesToDoList/index";
import Delete from "../../services/servicesToDoList/delete";
import Update from "../../services/servicesToDoList/update";

let database;

class TodoController {
  constructor(db) {
    database = db;
  }

  async create(req, res) {
    const todo = req.body;

    try {
      const createToDoList = new CreateToDoList(database);
      const response = await createToDoList.execute(todo);

      return res.status(201).json(response);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async index(req, res) {
    try {
      const index = new Index(database);
      const response = await index.execute();

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async delete(req, res) {
    try {
      const deleteOne = new Delete(database);
      await deleteOne.execute({ id: req.params.id });

      return res
        .status(200)
        .json({ message: "to-do deleted", statusCode: 200 });
    } catch (error) {
      return res.status(400).json({ error: error.message, statusCode: 400 });
    }
  }

  async update(req, res) {
    try {
      const updateOne = new Update(database);

      const response = await updateOne.execute({
        id: req.params.id,
        status: req.body.status,
        back: req.body.back,
      });

      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async nothing(req, res) {
    try {
      const createNothing = new CreateNothing(database);
      const response = await createNothing.execute();
      return res.status(200).json({ statusCode: 200, data: response });
    } catch (error) {
      return res.status(400).json({ statusCode: 400, error: error.message });
    }
  }
}

export default TodoController;
