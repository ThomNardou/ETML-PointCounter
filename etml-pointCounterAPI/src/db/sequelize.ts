import { DataType, Sequelize } from "@sequelize/core";
import { PostgresDialect } from "@sequelize/postgres";

import { UserModel } from "../models/t_user";
import { HasModel } from "../models/has";
import { ModuleModel } from "../models/t_module";
import { IsAffiliatedModel } from "../models/is_affiliated";
import { LearnsModel } from "../models/learns";
import { ClassModel } from "../models/t_classe";
import { TeamModel } from "../models/t_team";

import dotenv from "dotenv";

dotenv.config();



const sequelize: Sequelize = new Sequelize({
    dialect: PostgresDialect,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string),
});

const User = UserModel(sequelize);
const Module = ModuleModel(sequelize);
const Class = ClassModel(sequelize);
const Team = TeamModel(sequelize);

const Has = HasModel(sequelize);
const IsAffiliated = IsAffiliatedModel(sequelize);
const Learns = LearnsModel(sequelize);

User.hasMany(Has, { foreignKey: "id_user" });
Has.belongsTo(User, { foreignKey: "id_user" });

Module.hasMany(Has, { foreignKey: "id_module" });
Has.belongsTo(Module, { foreignKey: "id_module" });

User.hasMany(IsAffiliated, { foreignKey: "id_user" });
IsAffiliated.belongsTo(User, { foreignKey: "id_user" });

Team.hasMany(IsAffiliated, { foreignKey: "id_group" });
IsAffiliated.belongsTo(Team, { foreignKey: "id_group" });

Team.hasMany(Module, { foreignKey: "id_module" });
Module.belongsTo(Team, { foreignKey: "id_module" });

Class.hasMany(Learns, { foreignKey: "id_class" });
Learns.belongsTo(Class, { foreignKey: "id_class" });

Module.hasMany(Learns, { foreignKey: "id_module" });
Learns.belongsTo(Module, { foreignKey: "id_module" });

User.belongsTo(Class, { foreignKey: "id_class" });
Class.hasMany(User, { foreignKey: "id_class" });

const initDb = () => {
    return sequelize.sync({ force: true })
    .then(() => {
        console.log("Database & tables created!");
    })
    .catch((err: Error) => {
        console.error("Unable to create database & tables:");
    });
}

export { sequelize, initDb, User, Module, Class, Team, Has, IsAffiliated, Learns };