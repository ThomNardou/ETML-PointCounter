import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { sequelize } from "./db/sequelize";

dotenv.config();

const app = express();
const port = process.env.API_PORT || 3000;


app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to the PointCounter API");
});

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established successfully!");
    })
    .catch((err: Error) => {
        console.error("Unable to connect to the database:", err);
    });

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})