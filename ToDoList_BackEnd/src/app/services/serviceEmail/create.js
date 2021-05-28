import { hash } from "bcrypt";

import { createTodoValidation } from "../../validation/validationEmail";

class CreateTodoService {
  constructor(db) {
    this.db = db;
  }

  async execute(todo) {
    const todoItem = {
      ...todo,
      back: 0,
      created_at: new Date(),
      updated_at: new Date(),
    };

    await createTodoValidation(todoItem);

    const response = await this.db.create(todoItem);

    return response;
  }
}

export default CreateTodoService;
