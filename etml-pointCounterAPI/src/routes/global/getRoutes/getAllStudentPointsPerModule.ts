import express, { Request, Response, Express } from "express";
import { Has, Module } from "../../../db/sequelize";
import { error } from "console";

const getAllStudentPointsPerModuleRouter = express.Router();

getAllStudentPointsPerModuleRouter.get(
  "/module/:id/students",
  async (req: Request, res: Response) => {
    Has.findAll({ where: { fk_module: parseInt(req.params.id) } })
      .then((has) => {
        if (has != null) {
          res.status(200).json({ numberOfPoints: has });
        } else {
          res.status(404).json({ error: "No match was found" });
        }
      })
      .catch((error) => {
        res.status(500).json(`An error occured: ${error}`);
      });
  }
);

export { getAllStudentPointsPerModuleRouter };
