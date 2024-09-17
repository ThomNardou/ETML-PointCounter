import express, { Request, Response, Express } from "express";
import { Team } from "../../db/sequelize";

const getAllTeamPointsPerModuleRouter = express.Router();

getAllTeamPointsPerModuleRouter.get("/module/:id/teams", async (req: Request, res: Response) => {
    Team.findAll({ where: { fk_module: req.params.id } }).then((team) => {
        if (team != null) {
            res.status(200).json({ entity: team })
        } else {
            res.status(404).json({ error: "No match was found" })
        }

    }).catch((error) => {
        res.status(500).json(`An error occured: ${error}`)
    })
})

export { getAllTeamPointsPerModuleRouter }