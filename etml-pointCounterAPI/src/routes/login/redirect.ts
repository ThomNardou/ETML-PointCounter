import express, { Express, Request, Response } from "express";
import { msalClient, port } from "../../app";

const redirectRouter: Express = express();

redirectRouter.get('/', (req: Request, res: Response) => {
  const tokenRequest = {
    code: req.query.code as string,
    scopes: ["openid", "profile", "User.Read"],
    redirectUri: `http://localhost:${port}/auth/redirect`,
  };

  msalClient
    .acquireTokenByCode(tokenRequest)
    .then((response) => {
      req.session.user = response.account ?? undefined;
      res.json({
        message: `Connecté en tant que ${req.session.user?.username}`,
        response,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Erreur lors de la connexion.");
    });
});

export { redirectRouter };
