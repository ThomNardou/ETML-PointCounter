import { Sequelize, DataTypes } from "@sequelize/core";

const TeamModel = (sequelize: Sequelize) => {
    return sequelize.define("t_team", {
        id_group: {
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
        id_module: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
}

export { TeamModel };