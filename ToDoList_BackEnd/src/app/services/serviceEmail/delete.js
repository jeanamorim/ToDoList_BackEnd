class DeleteTodoService {
  constructor(db) {
    this.db = db;
  }

  async execute({ id }) {
    if (!id) {
      throw new Error("cannot delete it without 'id'");
    }
    await this.db.destroy({ where: { id } });

    return "success";
  }
}

export default DeleteTodoService;
