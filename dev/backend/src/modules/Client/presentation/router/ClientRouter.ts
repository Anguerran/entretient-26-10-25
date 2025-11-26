import { Router } from "express";
import { DBClientRepository } from "../../infrastructure/repository/DBClientRepository";
import { ClientController } from "../controller/ClientController";
import { ClientRoutes } from "./ClientRoutes";

const repository = new DBClientRepository();
const controller = new ClientController(repository);

const router = Router();

export const ClientRouter = router;
