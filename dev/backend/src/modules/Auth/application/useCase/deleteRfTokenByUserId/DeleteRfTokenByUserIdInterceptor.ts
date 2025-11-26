import { AuthGateway } from '../../../gateway/AuthGateway';
import { AppError } from "../../../../../../shared/error/AppError";
import { ExeptionEnum } from "../../../../../../shared/error/ExeptionEnum";
import { HttpStatusEnum } from "../../../../../../shared/error/httpStatusEnum";
import { DeleteRfTokenByUserIdCommand } from './DeleteRfTokenByUserIdCommand';
import { validateDeleteRfTokensByUserId } from '../../validations/validateDeleteRfTokensByUserId';

export class DeleteTokenByUserIdInterceptor {
  private error = new AppError({
    data: ["Failed to delete the refresh token at auth module"],
    message: "Falied  to delete the refresh token",
    status: HttpStatusEnum.S500,
    type: ExeptionEnum.INTERNAL_SERVER_ERROR,
  });


    constructor(private repository: AuthGateway) {}

    async execute(command:DeleteRfTokenByUserIdCommand) {
      const zodResult = validateDeleteRfTokensByUserId.safeParse(command);
      if (zodResult.error) {
        this.error.data = {
          data: zodResult.error.format(),
          message: "Failed to validate user id Result",
          status: HttpStatusEnum.S400,
          type: ExeptionEnum.VALIDATION_ERROR,
        };
        throw this.error.getError();
      }
      try {
        const res = await this.repository.deleteAllRefreshTokensByUserId(zodResult.data);
        return res;
      } catch (error) {
        throw this.error.getError(error);
      }
    }
}
