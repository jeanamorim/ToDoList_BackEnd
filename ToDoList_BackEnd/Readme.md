<a href="https://drive.google.com/file/d/1iTgqMVl6A96djCWV6Adepxt2IbIHckBI/view?usp=sharing" target="_blank">Arquivo do insomnia</a>

# USER ROUTES

# Create todo = - POST - = /todo

{
"title":"Fazer compras",
"description":"Comprar pão, carne"
"status":"create" | "doing" | "completed"
}

# Update todo = - update - = /todo/:id

{
"status": "create" | "doing" | "completed"
}

# Delete todo = - delete - = /todo/:id

"use strict";

module.exports = {
up: async (queryInterface, Sequelize) => {
return queryInterface.createTable("users", {
id: {
type: Sequelize.INTEGER,
allowNull: false,
autoIncrement: true,
primaryKey: true,
},
name: {
type: Sequelize.STRING,
allowNull: false,
},
});
/\*\*
_ Add altering commands here.
_
_ Example:
_ await queryInterface.createTable('users', { id: Sequelize.INTEGER });
\*/
},

down: async (queryInterface, Sequelize) => {
return queryInterface.dropTable("todos");
/\*\*
_ Add reverting commands here.
_
_ Example:
_ await queryInterface.dropTable('users');
\*/
},
};
