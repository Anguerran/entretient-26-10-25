import { AppError } from "../../../../../../shared/error/AppError";
import { ExeptionEnum } from "../../../../../../shared/error/ExeptionEnum";
import { HttpStatusEnum } from "../../../../../../shared/error/httpStatusEnum";
import { FindUserByEmailCommand } from "../../../../User/application/useCase/findUserByEmail/findUserByEmailCommand";
import { AuthGateway } from "../../../gateway/AuthGateway";
import { validateAuthFindUserByMail } from "../../validations/validateAuthFindUserBymail";

export class AuthFIndUserByMailInterceptor {
  error = new AppError({
    data: ["Error while finding user  at auth module/findUserbyEmail"], 
    message: "error while finding user at authentication",
    status: HttpStatusEnum.S500,
  });
  constructor(private repository: AuthGateway) {}

  async execute(command: FindUserByEmailCommand) {
    try {
      const zodResult = validateAuthFindUserByMail.safeParse(command);
      if (zodResult.error) {
        this.error.data = {
          data: zodResult.error.format(),
          message: "Invalid user id",
          status: HttpStatusEnum.S400,
          type: ExeptionEnum.VALIDATION_ERROR,
        };
        throw this.error.getError();
      }
      const res = await this.repository.findUserByEmail({
        email: command.email,
      });
      return res;
    } catch (error) {
      throw this.error.getError(error);
    }
  }
}
