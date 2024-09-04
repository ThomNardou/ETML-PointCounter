import { Sequelize, DataTypes } from "@sequelize/core";

const TeamModel = (sequelize: Sequelize) => {
    return sequelize.define("t_team", {
        id_team: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        groName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        groNbrOfPoints: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fk_module: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        // permet d'enlever le pluriel
        freezeTableName: true
    })
}

export { TeamModel };