import express, { Express, Request, Response } from "express";
import { Team } from "../../../db/sequelize";

const createNewTeamRouter: Express = express();

createNewTeamRouter.post('/', (req: Request, res: Response) => {
    Team.create({
        groName: req.body.groName,
        groNbrOfPoints: 0,
        fk_module: req.body.fk_module
    })
    .then((team) => {
        res.status(200).json(team);
    })
    .catch((error) => {
        res.status(500).json(`An error occured: ${error}`);
    });
})

export { createNewTeamRouter };