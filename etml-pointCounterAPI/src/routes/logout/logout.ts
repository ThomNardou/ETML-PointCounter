import express, {Express, Request, Response} from "express";

const logoutRouter: Express = express();

logoutRouter.get("/", (req: Request, res: Response) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            res.status(500).send("Erreur lors de la déconnexion.");
        } else {
            res.redirect("/");
        }
    });
});

export {logoutRouter};