import express, {Express, Request, Response} from 'express';
import { User } from '../../../db/sequelize';

const getStudentByIdRouter: Express = express();

getStudentByIdRouter.get('/:id', (req: Request, res: Response) => {
    const idStudent: number = parseInt(req.params.id);

    User.findByPk(idStudent)
    .then(user => {
        if (!user) {
            res.status(404).json({message: 'No student found'});
        }
        res.status(200).json({message: 'Student found', user});
    })
    .catch(err => {
        res.status(500).json({message: 'Internal server error'});
    });
});

export {getStudentByIdRouter};