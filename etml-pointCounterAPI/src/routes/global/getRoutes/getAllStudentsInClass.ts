import express, {Request, Response, Express} from 'express';
import { User } from '../../../db/sequelize';

const getAllStudentInClassRouter: Express = express();

getAllStudentInClassRouter.get('/:id', (req: Request, res: Response) => {
    const idClass: number = parseInt(req.params.id);

    User.findAll({
        where: {
            fk_class: idClass
        }
    })
    .then(users => {
        if (users.length === 0) {
            res.status(404).json({message: 'No student found in this class'});
        }
        res.status(200).json({message: 'Students found', users});
    })
    .catch(err => {
        res.status(500).json({message: 'Internal server error'});
    });
});


export {getAllStudentInClassRouter};