import express, { Express, Request, Response } from 'express';
import dotenv from "dotenv";
import { msalClient, port } from '../../app';

const loginRouter: Express = express();

const APIHost = process.env.API_HOST || "localhost";

loginRouter.get('/', (req: Request, res: Response) => {
    const authCodeUrlParameters = {
        scopes: ["openid", "profile", "User.Read"],
        redirectUri: `http://${process.env.API_HOST}:${port}/auth/redirect`,
    };

    msalClient
        .getAuthCodeUrl(authCodeUrlParameters)
        .then((response) => {
            res.redirect(response);
        })
        .catch((error) => console.log(JSON.stringify(error)));
})

export { loginRouter };