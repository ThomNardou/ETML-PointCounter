import express, {Express, Request, Response} from 'express';
import { Module } from '../../../db/sequelize';

const getModuleByIdRouter: Express = express();

getModuleByIdRouter.get('/:id', (req: Request, res: Response) => {
    const idModule: number = parseInt(req.params.id);

    Module.findByPk(idModule)
    .then(module => {
        if (!module) {
            res.status(404).json({message: 'No module found'});
        }
        res.status(200).json({message: 'Module found', module});
    })
    .catch(err => {
        res.status(500).json({message: 'Internal server error'});
    });
});

export {getModuleByIdRouter};