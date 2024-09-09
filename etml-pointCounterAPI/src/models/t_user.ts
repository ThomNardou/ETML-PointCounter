import { DataTypes, Sequelize } from "@sequelize/core";
import { fork } from "child_process";

const UserModel = (sequelize: Sequelize) => {
    return sequelize.define("t_user", {
        id_user: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        useName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        useEmail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        useSurname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        useIsTeacher: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        fk_class: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        // permet d'enlever le pluriel
        freezeTableName: true
    })
}

export { UserModel };