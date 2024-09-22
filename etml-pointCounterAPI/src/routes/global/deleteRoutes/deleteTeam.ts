import express, {Express, Request, Response} from 'express';
import { Team } from '../../../db/sequelize';

const deleteTeamRouter: Express = express();

deleteTeamRouter.delete('/:idTeam', (req: Request, res: Response) => {
    Team.findByPk(req.params.idTeam)
    .then((team) => {
        if (!team) {
            res.status(404).json({ error: "No match was found" });
            return;
        }
        else {
            Team.destroy({ where: { id_team: req.params.idTeam } })
            .then((_) => {
                res.status(200).json({ entity: team });
            })
            .catch((error) => {
                res.status(500).json(`An error occured: ${error}`);
            });
        }
    })
    .catch((error) => {
        res.status(500).json(`An error occured: ${error}`);
    });
});

export { deleteTeamRouter };