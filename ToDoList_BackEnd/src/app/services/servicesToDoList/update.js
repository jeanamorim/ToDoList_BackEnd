class CreateUserService {
  constructor(db) {
    this.db = db;
  }

  async execute({ id, status, back }) {
    const toDo = await this.db.findOne({ where: { id } });

    if (!toDo) {
      throw new Error("ToDo is not exists");
    }

    console.log(status, back);

    await this.db.update({ status, back }, { where: { id } });

    const toDoupdated = await this.db.findOne({ where: { id } });

    return toDoupdated;
  }
}

export default CreateUserService;
