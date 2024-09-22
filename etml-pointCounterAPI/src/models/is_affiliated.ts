import { Sequelize, DataTypes } from "@sequelize/core";
import { Team, User } from "../db/sequelize";

const IsAffiliatedModel = (sequelize: Sequelize) => {
    return sequelize.define("is_affiliated", {
        fk_user: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: User,
                key: 'id_user'
            }
        },
        fk_team: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model:Team,
                key: 'id_team'
            }
        }
    },
    {
        // permet d'enlever le pluriel
        freezeTableName: true
    })
}

export { IsAffiliatedModel };