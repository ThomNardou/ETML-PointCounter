import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { initDb, sequelize } from "./db/sequelize";
import { PublicClientApplication, ConfidentialClientApplication, AccountInfo } from "@azure/msal-node";
import { msalConfig } from "./auth/authConfig";
import session = require("express-session");
import { loginRouter } from "./routes/login/login";
import { redirectRouter } from "./routes/login/redirect";
import { logoutRouter } from "./routes/logout/logout";

import { getAllStudentPointsPerModuleRouter } from "./routes/global/getRoutes/getAllStudentPointsPerModule";
import { getAllTeamPointsPerModuleRouter } from "./routes/global/getRoutes/getAllTeamsPointsPerModule";
import { getAllClassPointsPerModuleRouter } from "./routes/global/getRoutes/getAllClassPointsPerModule";
import { updateStudentPointsFromAModule } from "./routes/global/updateRoutes/updateStudentPointsFromAModule";
import { updateTeamPointsFromAModule } from "./routes/global/updateRoutes/updateTeamPointsFromAModule";
import { getAllModulesStudentParticipates } from "./routes/global/getRoutes/getAllModulesStudentParticipates";
import { createNewTeamRouter } from "./routes/global/postRoutes/createNewTeam";
import { updateTeamRouter } from "./routes/global/updateRoutes/updateTeam";
import { deleteTeamRouter } from "./routes/global/deleteRoutes/deleteTeam";
import { addStudentInTeamRouter } from "./routes/global/postRoutes/addStudentInTeam";

import cors from 'cors';
import { getAllStudentInClassRouter } from "./routes/global/getRoutes/getAllStudentsInClass";
import { getStudentByIdRouter } from "./routes/global/getRoutes/getStudentById";
import { getHisPersonnalInfoRouter } from "./routes/global/getRoutes/getHisPersonnalInfo";

dotenv.config();

const app = express();
const port = process.env.API_PORT || 3000;

const msalClient = new ConfidentialClientApplication(msalConfig)



app.use(cors(
    
));
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

///////////////////////////////////////////////// GET ROUTES //////////////////////////////////////////////////
app.use("/", getAllStudentPointsPerModuleRouter)
app.use("/", getAllTeamPointsPerModuleRouter)
app.use("/", getAllClassPointsPerModuleRouter)
app.use('/', getAllModulesStudentParticipates)
app.use("/students/class", getAllStudentInClassRouter)
app.use("/student", getStudentByIdRouter)
app.use("/myInfo", getHisPersonnalInfoRouter)

///////////////////////////////////////////////// UPDATE ROUTES //////////////////////////////////////////////////
app.use("/update", updateStudentPointsFromAModule)
app.use("/update", updateTeamPointsFromAModule)
app.use("/update/team", updateTeamRouter)

///////////////////////////////////////////////// POST ROUTE //////////////////////////////////////////////////
app.use("/create/team", createNewTeamRouter);
app.use("/add/team", addStudentInTeamRouter);

///////////////////////////////////////////////// DELETE ROUTE ////////////////////////////////////////////////// 
app.use("/delete/team", deleteTeamRouter);



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

// initDb();

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})

export { msalClient, port };