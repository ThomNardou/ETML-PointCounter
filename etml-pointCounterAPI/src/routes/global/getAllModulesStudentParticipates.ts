import express, { Request, Response } from "express";
import { Has } from "../../db/sequelize";

const getAllModulesStudentParticipates = express.Router();

getAllModulesStudentParticipates.get("/modules/student/:id", async (req: Request, res: Response) => {
    Has.findAll({ where: { fk_user: req.params.id } }).then((has) => {
        if (has != null) {
            res.status(200).json({ numberOfPoints: has })
        } else {
            res.status(404).json({ error: "No match was found" })
        }
    }).catch((error) => {
        res.status(500).json(`An error occured: ${error}`)
    })

})

export { getAllModulesStudentParticipates }