import express, { Express, Request, Response } from 'express';
import { Team } from '../../../db/sequelize';

const updateTeamRouter: Express = express();


updateTeamRouter.put('/:idTeam', (req: Request, res: Response) => {
    Team.update(req.body, { where: { id_team: req.params.idTeam } })
        .then((_) => {
            return Team.findByPk(req.params.idTeam).then((updatedTeam) => {
                if (updatedTeam != null) {
                    res.status(200).json({ entity: updatedTeam });
                }
                else {
                    res.status(404).json({ error: "No match was found" });
                }
            });
        })
        .catch((error) => {
            res.status(500).json(`An error occured: ${error}`);
        });
});

export { updateTeamRouter };