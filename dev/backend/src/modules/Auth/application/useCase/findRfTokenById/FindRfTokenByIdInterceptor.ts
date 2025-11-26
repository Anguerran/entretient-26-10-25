import { AuthGateway } from '../../../gateway/AuthGateway';
import { AppError } from "../../../../../../shared/error/AppError";
import { ExeptionEnum } from "../../../../../../shared/error/ExeptionEnum";
import { HttpStatusEnum } from "../../../../../../shared/error/httpStatusEnum";
import { FindRfTokenByIdCommand } from './FindRfTokenByIdCommand';
import { validateFindRfTokenById } from '../../validations/validateFindRfTokenById';

export class DeleteTokenByIdInterceptor {
  private error = new AppError({
    data: ["Failed to find the refresh token at auth module"],
    message: "Falied  to find the refresh token",
    status: HttpStatusEnum.S500,
    type: ExeptionEnum.INTERNAL_SERVER_ERROR,
  });


    constructor(private repository: AuthGateway) {}

    async execute(command:FindRfTokenByIdCommand) {
      const zodResult = validateFindRfTokenById.safeParse(command);
      if (zodResult.error) {
        this.error.data = {
          data: zodResult.error.format(),
          message: "Failed to validate RefreshToken",
          status: HttpStatusEnum.S400,
          type: ExeptionEnum.VALIDATION_ERROR,
        };
        throw this.error.getError();
      }
      try {
        const res = await this.repository.findRefreshTokenById(zodResult.data);
        return res;
      } catch (error) {
        throw this.error.getError(error);
      }
    }
}
