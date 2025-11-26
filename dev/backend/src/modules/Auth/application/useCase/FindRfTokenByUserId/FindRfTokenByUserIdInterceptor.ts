import { AppError } from "../../../../../../shared/error/AppError";
import { ExeptionEnum } from "../../../../../../shared/error/ExeptionEnum";
import { HttpStatusEnum } from "../../../../../../shared/error/httpStatusEnum";
import { AuthGateway } from "../../../gateway/AuthGateway";
import { validateFindRftokenByUserId } from "../../validations/validateFindRfTokenByUserId";
import { FindRfTokenByUserIdCommand } from "./findRfTokenByUserIdCommand";

export class FindRfTokenModelInterceptorByUserId {
  private error = new AppError({
    data: ["Error while findind the token"],
    message: "Error while Finding the token for this user ",
    status: HttpStatusEnum.S500,
    type: ExeptionEnum.INTERNAL_SERVER_ERROR,
  });

  constructor(private repository: AuthGateway) {}

  async execute(command: FindRfTokenByUserIdCommand) {
    try {
      const zodResult = validateFindRftokenByUserId.safeParse(command);
      if (zodResult.error) {
        this.error.data = {
          data: zodResult.error.format(),
          message: "Invalid user id",
          status: HttpStatusEnum.S400,
          type: ExeptionEnum.VALIDATION_ERROR,
        };
        throw this.error.getError();
      }
      const res = await this.repository.findRefreshTokenByUserId(command);
      return res;
    } catch (error) {
      throw this.error.getError(error);
    }
  }
}
