import Express from "express";
import cors from "cors";
import path from "path";

import morgan from "morgan";

import ModelTodo from "../Models/todolist";

import * as ctrs from "./controller";
import * as rtrs from "./routes";

const main = async () => {
  const TodoController = new ctrs.TodoController(ModelTodo);
  const EmailController = new ctrs.EmailController();
  const rootRouter = Express.Router();
  rootRouter.use("/todolist", rtrs.RouterTodo.configure(TodoController));
  rootRouter.use("/email", rtrs.RouterEmail.configure(EmailController));
  const app = Express();

  app.use([
    cors(),
    Express.json({ limit: "10mb" }),
    Express.urlencoded({ extended: true }),
  ]);

  app.use(morgan("dev"));
  

  app.use(rootRouter);

  return app;
};

export default main;
