import { Router } from "express";
import { DBManagerRepository } from "../../infrastructure/repository/DBManagerRepository";
import { ManagerController } from "../controller/ManagerController";
import { ManagerRoutes } from "./ManagerRoutes";

const repository = new DBManagerRepository();
const controller = new ManagerController(repository);

const router = Router();

//  /Manager/updateManagerById
router.get(ManagerRoutes.updateManagerById, controller.updateManagerById.bind(controller));


//  /Manager/findAllManager
router.get(ManagerRoutes.findAllManager, controller.findAllManager.bind(controller));


//  /Manager/deleteManager
router.get(ManagerRoutes.deleteManager, controller.deleteManager.bind(controller));


//  /Manager/createManager
router.get(ManagerRoutes.createManager, controller.createManager.bind(controller));


export const ManagerRouter = router;
