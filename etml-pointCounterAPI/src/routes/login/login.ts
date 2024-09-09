import express, { Express, Request, Response } from 'express';
import { msalClient } from '../../app';

const loginRouter: Express = express();

loginRouter.get('/', (req: Request, res: Response) => {
    const authCodeUrlParameters = {
        scopes: ["openid", "profile", "User.Read"],
        redirectUri: "http://localhost:3000/auth/redirect",
    };

    msalClient
        .getAuthCodeUrl(authCodeUrlParameters)
        .then((response) => {
            res.redirect(response);
        })
        .catch((error) => console.log(JSON.stringify(error)));
})

export { loginRouter };