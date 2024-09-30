import express, {Express, Response, Request} from 'express';

const getHisPersonnalInfoRouter: Express = express();

getHisPersonnalInfoRouter.get('/', (req: Request, res: Response) => {
    if (req.session.user) {
        res.status(200).json({message: 'Your own informations', user: req.session.user});
    }
    else {
        res.redirect('/login');
    }
});

export {getHisPersonnalInfoRouter};