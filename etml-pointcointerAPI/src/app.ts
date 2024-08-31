import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.API_PORT || 3000;


app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello sgwshszh");
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})