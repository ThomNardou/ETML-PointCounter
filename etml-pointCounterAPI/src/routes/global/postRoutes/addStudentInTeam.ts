import express, {Express, Request, Response} from 'express';
import { IsAffiliated, Team, User } from '../../../db/sequelize';

const addStudentInTeamRouter: Express = express();

addStudentInTeamRouter.post('/:idTeam/student/:idStudent', (req: Request, res: Response) => {

    const team = Team.findByPk(parseInt(req.params.idTeam));
    const student = User.findByPk(parseInt(req.params.idStudent));

    if (team === null) 
        return res.status(404).json({ error: "No match was found for the team" });
    if (student === null)
        return res.status(404).json({ error: "No match was found for the student" });

    console.log(req.params.idStudent);
    
    IsAffiliated.create({
        fk_team: parseInt(req.params.idTeam),
        fk_user: parseInt(req.params.idStudent)
    })
    .then((isAffiliated) => {
        res.status(200).json(isAffiliated);
    })
    .catch((error) => {
        res.status(500).json(`An error occured: ${error}`);
    });
});

export { addStudentInTeamRouter };