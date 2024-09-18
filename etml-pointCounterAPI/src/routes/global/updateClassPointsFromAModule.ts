import express, { Request, Response } from "express";
import { Learns } from "../../db/sequelize";

const updateClassPointsFromAModule = express.Router();

updateClassPointsFromAModule.put("/class/:idClass", async (req: Request, res: Response) => {
    Learns.update(req.body, { where: {id_team: req.params.idClass}})
    .then((_) =>  {
        return Learns.findByPk(req.params.idClass).then((updatedClass) => {
            if(updatedClass != null){
                res.status(200).json({entity: updatedClass})
            }
        });
    })
    .catch((error) => {
        res.status(500).json(`An error occured: ${error}`)
    })

})

export { updateClassPointsFromAModule }