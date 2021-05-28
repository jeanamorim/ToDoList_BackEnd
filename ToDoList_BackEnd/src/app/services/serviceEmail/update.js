class CreateUserService {
  constructor(db) {
    this.db = db;
  }

  async execute({ id, status }) {
    const toDo = await this.db.findOne({ where: { id } });

    if (!toDo) {
      throw new Error("ToDo is not exists");
    }

    console.log(status);

    await this.db.update({ status }, { where: { id } });

    const toDoupdated = await this.db.findOne({ where: { id } });

    return toDoupdated;
  }
}

export default CreateUserService;
