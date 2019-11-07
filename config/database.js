const Sequelize = require("sequelize");
module.exports = new Sequelize("todolist", "todolist", "todolist", {
    host: "localhost",
    dialect: "postgres"
});