import { DataType, Sequelize } from "@sequelize/core";
import { PostgresDialect } from "@sequelize/postgres";

import { UserModel } from "../models/t_user";
import { HasModel } from "../models/has";
import { ModuleModel } from "../models/t_module";

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
const Has = HasModel(sequelize);

export { sequelize };