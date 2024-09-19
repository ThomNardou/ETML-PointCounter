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
import { group } from "console";
import { modules } from "./mock-modules";
import { classes } from "./mock-classes";

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

User.belongsTo(Class, { foreignKey: "fk_class" });
Class.hasMany(User, { foreignKey: "fk_class" });

Module.hasMany(Team, { foreignKey: "fk_module" });
Team.belongsTo(Module, { foreignKey: "fk_module" });

const initDb = async () => {
    return sequelize.sync({ force: true })
    .then(() => {
        
        importClasses();
        importModules();

        console.log("Database & tables created!");
    })
    .catch((err: Error) => {
        console.error("Unable to create database & tables:" + err);
    });
}

const importClasses = () => {
    classes.map((classe) => {
        Class.create({
            claName: classe.claName,
        })
        .then(() => {
            console.log(`Class ${classe.claName} created!`);	
        })
        .catch((err: Error) => {
            console.error("Unable to create default class:" + err);
        });
    });
}

const importModules = () => {
    modules.map((module) => {
        Module.create({
            modNumber: module.modNumber,
            modTeacher: module.modTeacher,
            modTrimester: module.modTrimester,
            modType: module.modType,
            modYear: module.modYear,
        })
        .then(() => {
            console.log(`Module ${module.modType}${module.modNumber} created!`);
        })
        .catch((err: Error) => {
            console.error("Unable to create module:" + err);
        });
    })
}

export { sequelize, initDb, User, Module, Class, Team, Has, IsAffiliated, Learns };