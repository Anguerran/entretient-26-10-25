
import { UpdateManagerByIdInterceptor } from "../../application/useCase/updateManagerById/updateManagerByIdInterceptor";
import { UpdateManagerByIdCommand } from "../../application/useCase/updateManagerById/updateManagerByIdCommand";
import { FindAllManagerInterceptor } from "../../application/useCase/findAllManager/findAllManagerInterceptor";
import { FindAllManagerCommand } from "../../application/useCase/findAllManager/findAllManagerCommand";
import { DeleteManagerInterceptor } from "../../application/useCase/deleteManager/deleteManagerInterceptor";
import { DeleteManagerCommand } from "../../application/useCase/deleteManager/deleteManagerCommand";
import { CreateManagerInterceptor } from "../../application/useCase/createManager/createManagerInterceptor";
import { CreateManagerCommand } from "../../application/useCase/createManager/createManagerCommand";
import { NextFunction, Request, Response } from "express";
import { ManagerGateway } from "../../gateway/ManagerGateway";

export class ManagerController {
    constructor(private repository: ManagerGateway) {}
    
private createManagerInterceptor = new CreateManagerInterceptor(this.repository);

private deleteManagerInterceptor = new DeleteManagerInterceptor(this.repository);

private findAllManagerInterceptor = new FindAllManagerInterceptor(this.repository);

private updateManagerByIdInterceptor = new UpdateManagerByIdInterceptor(this.repository);
//do-not-delete-me-please-i-am-a-helper
// ? createManager

  async createManager(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body as CreateManagerCommand;
      const result = await this.createManagerInterceptor.execute(data);
      res.json(result).status(200);
    } catch (error) {
      next(error);
    }
  }
// ? deleteManager

  async deleteManager(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.params as DeleteManagerCommand;
      const result = await this.deleteManagerInterceptor.execute(data);
      res.json(result).status(200);
    } catch (error) {
      next(error);
    }
  }
// ? findAllManager

  async findAllManager(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.params as FindAllManagerCommand;
      const result = await this.findAllManagerInterceptor.execute(data);
      res.json(result).status(200);
    } catch (error) {
      next(error);
    }
  }
// ? updateManagerById

  async updateManagerById(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body as UpdateManagerByIdCommand;
      const result = await this.updateManagerByIdInterceptor.execute(data);
      res.json(result).status(200);
    } catch (error) {
      next(error);
    }
  }
  
  }