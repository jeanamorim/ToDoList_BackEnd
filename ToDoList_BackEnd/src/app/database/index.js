import { Sequelize } from "sequelize";

import databaseConfig from "../config/database";
import todo from "../Models/todolist";

const models = [todo];

class Database {
  constructor() {
    this.init();
  }

  init() {
    const sequelize = new Sequelize({
      host: process.env.DATABASE_HOST,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT,
      dialect: "postgres",
      protocol: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      define: {
        timestamps: false,
      },
    });

    sequelize.sync;
    sequelize
      .authenticate()
      .then((res) => console.log("database conected"))
      .catch((err) => console.log(err));

    models
      .map((model) => model.init(sequelize))
      .map((model) => model.associate && model.associate(sequelize.models));
  }
}

export default new Database();
