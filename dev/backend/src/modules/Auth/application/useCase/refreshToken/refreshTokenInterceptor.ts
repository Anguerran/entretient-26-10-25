import { AppError } from "../../../../../../shared/error/AppError";
import { ExeptionEnum } from "./../../../../../../shared/error/ExeptionEnum";
import { HttpStatusEnum } from "../../../../../../shared/error/httpStatusEnum";
import { AuthGateway } from "../../../gateway/AuthGateway";
import { RefreshTokenCommand } from "./refreshTokenCommand";
import { RefreshTokenResponse } from "./refreshTokenResponse";
import { validateRefreshToken } from "../../validations/validateRefreshToken";
import { generateAccessToken } from "../../../utils/tokenHelper";
import { createFutureDateMinuteUTC } from "../../../../../shared/utils/createFutureDate";
import { Global } from "../../../../../Global";

export class RefreshTokenInterceptor {
  private error = new AppError({
    message: "error at RefreshToken please Report to the team",
    status: HttpStatusEnum.S500,
    type: ExeptionEnum.INTERNAL_SERVER_ERROR,
  });
  constructor(private repository: AuthGateway) {}

  async execute(command: RefreshTokenCommand): Promise<RefreshTokenResponse> {
    try {
      const zodResult = validateRefreshToken.safeParse(command);
      if (zodResult.error) {
        this.error.data.data = zodResult.error.format();
        this.error.data.message = "invalide input at refreshToken";
        this.error.data.status = HttpStatusEnum.S400;
        this.error.data.type = ExeptionEnum.VALIDATION_ERROR;
        throw this.error;
      }

      const refreshToken = await this.repository.findRefreshTokenById({
        id: command.refreshTokenId,
      });

      if (!refreshToken) {
        this.error.data = {
          data: ["Invalid refreshToken , the refresh token was not found"],
          message: "The refresh token do not existe please login",
          status: HttpStatusEnum.S404,
          type: ExeptionEnum.AUTHENTICATION_ERROR,
        };
        throw this.error.getError();
      }
      const user = await this.repository.authFindUserById({
        id: refreshToken.userId,
      });
      if (!user) {
        this.error.data = {
          data: [
            "user not found for this token. there is not valide for this refresh token",
          ],
          message: "The refresh token do not belong to any user please login",
          status: HttpStatusEnum.S404,
          type: ExeptionEnum.AUTHENTICATION_ERROR,
        };
        throw this.error.getError();
      }
      const accesToken = generateAccessToken({
        email: user.email,
        role: user.role,
        userId: user.id,
      });
      return {
        expireIn: createFutureDateMinuteUTC(
          parseInt(Global.ACCESS_EXPIRY_MIN || "15")
        ),
        token: accesToken,
      };
    } catch (error) {
      throw this.error.getError(error);
    }
  }
}
