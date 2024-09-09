import { Sequelize, DataTypes } from "@sequelize/core";
import { Class, Module } from "../db/sequelize";

const LearnsModel = (sequqlize: Sequelize) => {
    return sequqlize.define("learns", {
        fk_module: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: Module,
                key: 'id_module'
            }
        },
        fk_class: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references:{
                model: Class,
                key: 'id_class'
            }
        },
        nbrOfClassPoints: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        // permet d'enlever le pluriel
        freezeTableName: true
    })
}

export { LearnsModel };