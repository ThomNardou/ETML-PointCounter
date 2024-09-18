import express, { Request, Response, Express } from "express";
import { Team } from "../../db/sequelize";

const updateTeamPointsFromAModule = express.Router();

updateTeamPointsFromAModule.put("/team/:idTeam", async (req: Request, res: Response) => {
    Team.update(req.body, { where: {id_team: req.params.idTeam}})
    .then((_) =>  {
        return Team.findByPk(req.params.idTeam).then((updatedTeam) => {
            if(updatedTeam != null){
                res.status(200).json({entity: updatedTeam})
            }
        })
    })
    .catch((error) => {
        res.status(500).json(`An error occured: ${error}`)
    })

})

export { updateTeamPointsFromAModule }