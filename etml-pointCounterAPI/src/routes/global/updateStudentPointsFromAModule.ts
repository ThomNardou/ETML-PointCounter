import express, { Request, Response, Express } from "express";
import { Has } from "../../db/sequelize";
import { Op } from "sequelize";

const updateStudentPointsFromAModule = express.Router();

updateStudentPointsFromAModule.put("/module/:idModule/students/:idUser", async (req: Request, res: Response) => {
    Has.findOne({
        where: {
            fk_module: req.params.idModule,
            fk_user: req.params.idUser
        },
      }).then((student) => {
        if (student != null) {
            student.dataValues.nbrOfPersonnalPoints += req.body.points;
            res.status(200).json({ entity: student })
        } else {
            res.status(404).json({ error: "No match was found" })
        }

    }).catch((error) => {
        res.status(500).json(`An error occured: ${error}`)
    })

})

export { updateStudentPointsFromAModule }