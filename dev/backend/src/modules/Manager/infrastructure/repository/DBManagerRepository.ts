import { Role } from "@prisma/client";
import prisma from "../../../../../prisma/prisma";
import { CreateManagerCommand } from "../../application/useCase/createManager/createManagerCommand";
import { CreateManagerResponse } from "../../application/useCase/createManager/createManagerResponse";
import { DeleteManagerCommand } from "../../application/useCase/deleteManager/deleteManagerCommand";
import { DeleteManagerResponse } from "../../application/useCase/deleteManager/deleteManagerResponse";
import { ManagerGateway } from "../../gateway/ManagerGateway";
import { FindAllManagerCommand } from "../../application/useCase/findAllManager/findAllManagerCommand";
import { FindAllManagerResponse } from "../../application/useCase/findAllManager/findAllManagerResponse";
import { UpdateManagerByIdCommand } from "../../application/useCase/updateManagerById/updateManagerByIdCommand";
import { UpdateManagerByIdResponse } from "../../application/useCase/updateManagerById/updateManagerByIdResponse";

export class DBManagerRepository implements ManagerGateway {
  private Manager = prisma.user;
  async createManager(
    command: CreateManagerCommand
  ): Promise<CreateManagerResponse> {
    const res = await this.Manager.create({
      data: {
        email: command.email,
        firstName: command.firstName,
        lastName: command.lastName,
        role: command.role as Role,
      },
    });
    return res;
  }
  async deleteManager(
    command: DeleteManagerCommand
  ): Promise<DeleteManagerResponse> {
    const res = await this.Manager.delete({ where: { id: command.id } });
    return res;
  }
  async findAllManager(
    command: FindAllManagerCommand
  ): Promise<FindAllManagerResponse> {
    const res = await this.Manager.findMany({ where: command });
    return res;
  }
  async updateManagerById(
    command: UpdateManagerByIdCommand
  ): Promise<UpdateManagerByIdResponse> {
    const res = await this.Manager.update({
      data: {
        email: command.email,
        role: command.role as Role,
      },
      where: { id: command.id },
    });
    return res;
  }
}
