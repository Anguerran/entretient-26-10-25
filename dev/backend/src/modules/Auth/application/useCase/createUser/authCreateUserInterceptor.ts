import { AppError } from "../../../../../../shared/error/AppError";
import { ExeptionEnum } from "../../../../../../shared/error/ExeptionEnum";
import { HttpStatusEnum } from "../../../../../../shared/error/httpStatusEnum";
import { AuthGateway } from "../../../gateway/AuthGateway";
import { bcryptService } from "../../../infrastructure/service/bcript/bcriptService";
import { validateAuthCreateUserCommand } from "../../validations/validateAuthCreateUser";
import { AuthCreateUserCommand } from "./authCreateUserCommand";

export class AuthCreateUserInterceptor {
 private error = new AppError({
    data: ["error while creating user at authentication"],
    message: "Failed to  create a user",
    status: 500,
  });
  constructor(private repository: AuthGateway) {}

  async execute(command: AuthCreateUserCommand) {
    try {
      const zodResult = validateAuthCreateUserCommand.safeParse(command);

      if (zodResult.error) {
        this.error.data = {
          data: zodResult.error.format(),
          message: "Invalid user data",
          status: HttpStatusEnum.S400,
          type: ExeptionEnum.VALIDATION_ERROR,
        };
        throw this.error.getError();
      }

      const existingUser = await this.repository.findUserByEmail({
        email: command.email,
      });
      if (existingUser) {
        this.error.data = {
          data: ["User already exists"],
          message: "User already exists",
          status: HttpStatusEnum.S409,
          type: ExeptionEnum.VALIDATION_ERROR,
        };
        throw this.error.getError();
      }
      const password = await bcryptService.hashPassword(command.password ?? "");
      const res = await this.repository.createUser({ ...command, password });

      return res;
    } catch (error) {
      throw this.error.getError(error);
    }
  }
}
