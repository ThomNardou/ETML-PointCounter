import express, { Express, Request, Response } from "express";
import { msalClient, port } from "../../app";
import { User } from "../../db/sequelize";

const redirectRouter: Express = express();

redirectRouter.get("/", (req: Request, res: Response) => {
  const tokenRequest = {
    code: req.query.code as string,
    scopes: ["openid", "profile", "User.Read"],
    redirectUri: `http://localhost:${port}/auth/redirect`,
  };

  msalClient
    .acquireTokenByCode(tokenRequest)
    .then((response) => {
      
      User.findOne({ where: { useEmail: response.account?.username } })
      .then((user) => {
        if (user == null) {
          User.create({
            useName: response.account?.name,
            useEmail: response.account?.username,
            useSurname: response.account?.username.split("@")[0],
            useIsTeacher: false,
            fk_class: 1,
          })
          .then((user) => {
            console.log(`User created.`);
          })
          .catch((error) => {
            res.status(500).send("Erreur lors de la connexion.");
          });
        }
      })
      .catch((error) => {
        res.status(500).send("Erreur lors de la connexion.");
      });

      
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
