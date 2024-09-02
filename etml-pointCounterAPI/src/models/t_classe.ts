import { Sequelize, DataTypes } from "@sequelize/core";

const ClassModel = (sequelize: Sequelize) => {
    return sequelize.define("t_class", {
        id_class: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        claName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
}

export { ClassModel };