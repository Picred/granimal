import {Sequelize} from "sequelize";

export default new Sequelize({
    dialect: "sqlite",
    storage: "data/database.sqlite",
    logging: false
});
