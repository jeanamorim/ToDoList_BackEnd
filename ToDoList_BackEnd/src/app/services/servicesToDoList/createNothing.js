import catApi from "../../Infra/services/catApi";

class createNothingTodoSevice {
  constructor(db) {
    this.db = db;
  }

  async execute() {
    const { data } = await catApi.get("/random?animal_type=dog&amount=3");

    data.forEach(async (element) => {
      const todoItem = {
        name: "eu",
        email: "eu@email.com",
        description: element.text,
        status: "created",
        back: 0,
        created_at: new Date(),
        updated_at: new Date(),
      };

      await this.db.create(todoItem);
    });

    return data;
  }
}

export default createNothingTodoSevice;
