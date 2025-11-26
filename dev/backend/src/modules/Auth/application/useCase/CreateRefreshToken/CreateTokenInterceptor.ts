import { AppError } from "../../../../../../shared/error/AppError";
import { ExeptionEnum } from "../../../../../../shared/error/ExeptionEnum";
import { HttpStatusEnum } from "../../../../../../shared/error/httpStatusEnum";
import { Global } from "../../../../../Global";
import { createFutureDateMinuteUTC } from "../../../../../shared/utils/createFutureDate";

import { AuthGateway } from "../../../gateway/AuthGateway";
import { AuthUserModel } from "../../../model/AuthUserModel";
import {
  calculateRefreshTokenExpiry,
  generateAccessToken,
  generateRefreshTokenString,
  hashRefreshToken,
} from "../../../utils/tokenHelper";
import { validateCreateRefreshToken } from "../../validations/validateSaveToken";
import { CreateRefreshTokenCommand } from "./CreateTokenCommand";

export class CreateTokenInterceptor {
  private error = new AppError({
    data: ["Failed to create the refressh token"],
    message: "Falied  to authenticate",
    status: HttpStatusEnum.S500,
    type: ExeptionEnum.INTERNAL_SERVER_ERROR,
  });

  constructor(private repository: AuthGateway) {}

  async execute(user: AuthUserModel) {
    try {
      const accessToken = generateAccessToken({
        userId: user.id,
        role: user.role,
        email: user.email,
      });
      const refreshTokenString = generateRefreshTokenString();
      const hashedRT = await hashRefreshToken(refreshTokenString);
      const rtExpiresAt = calculateRefreshTokenExpiry();

      const refreshToken = await this.saveToken({
        userId: user.id,
        hashedToken: hashedRT,
        expiresAt: rtExpiresAt,
      });
      console.log("refreshToken", refreshToken);
      return {
        accessToken: {
          expireIn: createFutureDateMinuteUTC(
            parseInt(Global.ACCESS_EXPIRY_MIN || "3")
          ),
          token: accessToken,
        },
        refreshToken,
      };
    } catch (error) {
      throw this.error.getError(error);
    }
  }
  private async saveToken(command: CreateRefreshTokenCommand) {
    try {
      const zodResult = validateCreateRefreshToken.safeParse(command);
      if (zodResult.error) {
        this.error.data = {
          data: zodResult.error.format(),
          message: "Failed to validate RefreshToken Result",
          status: HttpStatusEnum.S400,
          type: ExeptionEnum.VALIDATION_ERROR,
        };
        throw this.error.getError();
      }

      const res = await this.repository.saveRefreshToken(command);
      return res;
    } catch (error) {
      throw this.error.getError(error);
    }
  }
}
