import { DataTypes, Sequelize } from "@sequelize/core";

const ModuleModel = (sequelize: Sequelize) => {
    return sequelize.define("t_module", {
        id_module: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        modNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        modType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        modTeacher: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        modYear: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        modTrimester: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        // permet d'enlever le pluriel
        freezeTableName: true
    });
}

export { ModuleModel };