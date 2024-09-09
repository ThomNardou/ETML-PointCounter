import { DataTypes, Sequelize } from "@sequelize/core";
import { Module, User } from "../db/sequelize";

const HasModel = (sequelize: Sequelize) => {
    return sequelize.define("has", {
        fk_user: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: User,
                key: 'id_user'
            }
        },
        fk_module: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: Module,
                key: 'id_module'
            }
        },
        nbrOfPersonnalPoints: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        // permet d'enlever le pluriel
        freezeTableName: true
    })
}

export { HasModel };