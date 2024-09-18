import express, { Request, Response, Express } from "express";
import { Learns } from "../../../db/sequelize";

const getAllClassPointsPerModuleRouter = express.Router();

getAllClassPointsPerModuleRouter.get(
  "/module/:id/class",
  async (req: Request, res: Response) => {
    Learns.findAll({ where: { fk_module: req.params.id } })
      .then((learns) => {
        if (learns != null) {
          res.status(200).json({ entity: learns });
        } else {
          res.status(404).json({ error: "No match was found" });
        }
      })
      .catch((error) => {
        res.status(500).json(`An error occured: ${error}`);
      });
  }
);

export { getAllClassPointsPerModuleRouter };
