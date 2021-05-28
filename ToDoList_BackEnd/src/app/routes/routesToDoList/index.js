import { Router } from "express";

class TodoRoutes {
  static configure(todoController) {
    const route = Router();

    route.post("/", todoController.create);
    route.post("/nothing", todoController.nothing);
    route.get("/", todoController.index);
    route.delete("/:id", todoController.delete);
    route.put("/:id", todoController.update);

    return route;
  }
}

export default TodoRoutes;
