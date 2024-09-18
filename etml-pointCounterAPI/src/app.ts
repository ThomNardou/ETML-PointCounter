import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { initDb, sequelize } from "./db/sequelize";
import { PublicClientApplication, ConfidentialClientApplication, AccountInfo } from "@azure/msal-node";
import { msalConfig } from "./auth/authConfig";
import session = require("express-session");
import { loginRouter } from "./routes/login/login";
import { redirectRouter } from "./routes/login/redirect";
import { logoutRouter } from "./routes/logout/logout";
import { getAllStudentPointsPerModuleRouter } from "./routes/global/getAllStudentPointsPerModule";
import { getAllTeamPointsPerModuleRouter } from "./routes/global/getAllTeamsPointsPerModule";
import { getAllClassPointsPerModuleRouter } from "./routes/global/getAllClassPointsPerModule";
import { updateStudentPointsFromAModule } from "./routes/global/updateStudentPointsFromAModule";
import { updateTeamPointsFromAModule } from "./routes/global/updateTeamPointsFromAModule";
import { getAllModulesStudentParticipates } from "./routes/global/getAllModulesStudentParticipates";

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

///////////////////////////////////////////////// AUTHENTICATION ROUTES //////////////////////////////////////////////////
app.use('/login', loginRouter);
app.use('/auth/redirect', redirectRouter);
app.use('/logout', logoutRouter);



app.get("/", (req: Request, res: Response) => {
    if (req.session.user) {
        res.send(`Connecté en tant que ${req.session.user.username} ET ${req.session.user.name}`);
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

//initDb();

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})


// Route that gets all the students with their points per module
app.use("/", getAllStudentPointsPerModuleRouter)

// Route that gets all the Teams with their points per module
app.use("/", getAllTeamPointsPerModuleRouter)

// Route that gets all the Teams with their points per module
app.use("/", getAllClassPointsPerModuleRouter)

// Route that updates a student's points from a module
app.use("/", updateStudentPointsFromAModule)

// Route that updates a team's points
app.use("/", updateTeamPointsFromAModule)

// Route that gets all the modules that the student takes part in
app.use('/', getAllModulesStudentParticipates)

export { msalClient, port };