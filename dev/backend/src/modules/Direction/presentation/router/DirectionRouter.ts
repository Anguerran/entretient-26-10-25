import { Router } from "express";
import { DBDirectionRepository } from "../../infrastructure/repository/DBDirectionRepository";
import { DirectionController } from "../controller/DirectionController";
import { DirectionRoutes } from "./DirectionRoutes";

const repository = new DBDirectionRepository();
const controller = new DirectionController(repository);

const router = Router();

export const DirectionRouter = router;
