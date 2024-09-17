import express, { Request, Response, Express } from "express";
import { Team } from "../../db/sequelize";

const updateTeamPointsFromAModule = express.Router();

updateTeamPointsFromAModule.put("/team/:idTeam", async (req: Request, res: Response) => {
    Team.findOne({
        where: {
            id_team: req.params.idTeam
        }
      }).then((team) => {
        if (team != null) {
            team.dataValues.groNbrOfPoints += req.body.points;
            res.status(200).json({ entity: team })
        } else {
            res.status(404).json({ error: "No team was found" })
        }

    }).catch((error) => {
        res.status(500).json(`An error occured: ${error}`)
    })

})

export { updateTeamPointsFromAModule }