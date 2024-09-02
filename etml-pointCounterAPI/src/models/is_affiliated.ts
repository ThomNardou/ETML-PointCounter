import { Sequelize, DataTypes } from "@sequelize/core";

const IsAffiliatedModel = (sequelize: Sequelize) => {
    return sequelize.define("is_affiliated", {
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        id_group: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
}

export { IsAffiliatedModel };