import { DataTypes, Sequelize } from "@sequelize/core";

const HasModel = (sequelize: Sequelize) => {
    return sequelize.define("has", {
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        id_module: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        nbrOfPersonnalPoints: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
}

export { HasModel };