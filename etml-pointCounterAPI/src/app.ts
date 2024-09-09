import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { initDb, sequelize } from "./db/sequelize";
import { PublicClientApplication, ConfidentialClientApplication, AccountInfo } from "@azure/msal-node";
import { msalConfig } from "./auth/authConfig";
import session = require("express-session");

dotenv.config();

const app = express();
const port = process.env.API_PORT || 3000;

const msalClient = new ConfidentialClientApplication(msalConfig)


app.use(express.json());

app.use(
    session({
        secret: process.env.SESSION_SECRET as string,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 3,
        }
    })
)

declare module 'express-session' {
    export interface SessionData {
        user?: AccountInfo;
    }
}

app.get("/login", (req: Request, res: Response) => {
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
});

app.get("/auth/redirect", (req: Request, res: Response) => {
    const tokenRequest = {
        code: req.query.code as string,
        scopes: ["openid", "profile", "User.Read"],
        redirectUri: "http://localhost:3000/auth/redirect",
    };

    msalClient
        .acquireTokenByCode(tokenRequest)
        .then((response) => {
            req.session.user = response.account ?? undefined;
            console.log(response)
            res.send(`Bonjour, ${response.account?.username}! Vous êtes connecté.`);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send("Erreur lors de la connexion.");
        });
});

app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            res.status(500).send("Erreur lors de la déconnexion.");
        } else {
            res.redirect("/");
        }
    });
});

app.get("/", (req: Request, res: Response) => {
    if (req.session.user) {
        res.send(`Connecté en tant que ${req.session.user.username}`);
    } else {
        res.send("Non connecté. <a href='/login'>Se connecter avec Microsoft</a>");
    }
});

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established successfully!");
    })
    .catch((err: Error) => {
        console.error("Unable to connect to the database:", err);
    });

initDb();

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})