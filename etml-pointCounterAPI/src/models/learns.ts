import { Sequelize, DataTypes } from "@sequelize/core";

const LearnsModel = (sequqlize: Sequelize) => {
    return sequqlize.define("learns", {
        id_module: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        id_class: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        nbrOfClassPoints: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
}

export { LearnsModel };