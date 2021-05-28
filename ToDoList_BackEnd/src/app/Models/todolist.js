import Sequelize, { Model } from "sequelize";

class todos extends Model {
  static init(connection) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        description: Sequelize.STRING,
        status: Sequelize.STRING,
        back: Sequelize.INTEGER,
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE,
      },
      {
        sequelize: connection,
      }
    );
    return this;
  }
}

export default todos;
