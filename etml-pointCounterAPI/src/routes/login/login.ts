import express, { Express, Request, Response } from 'express';
import { msalClient, port } from '../../app';

const loginRouter: Express = express();

loginRouter.get('/', (req: Request, res: Response) => {
    const authCodeUrlParameters = {
        scopes: ["openid", "profile", "User.Read"],
        redirectUri: `http://localhost:${port}/auth/redirect`,
    };

    msalClient
        .getAuthCodeUrl(authCodeUrlParameters)
        .then((response) => {
            res.redirect(response);
        })
        .catch((error) => console.log(JSON.stringify(error)));
})

export { loginRouter };