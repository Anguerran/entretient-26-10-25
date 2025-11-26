import { RefreshTokenInterceptor } from "../../application/useCase/refreshToken/refreshTokenInterceptor";
import { Global } from "./../../../../Global";
import { NextFunction, Request, Response } from "express";
import { AuthGateway } from "../../../Auth/gateway/AuthGateway";
import { AuthCreateUserCommand } from "../../../Auth/application/useCase/createUser/authCreateUserCommand";
import { AuthCreateUserInterceptor } from "../../../Auth/application/useCase/createUser/authCreateUserInterceptor";
import { HttpStatusEnum } from "../../../../../shared/error/httpStatusEnum";

import { LogoutInterceptor } from "../../../Auth/application/useCase/logout/logoutInterceptor";
import { RefreshTokenModel as RefreshTokenModel } from "../../model/RefreshTokenModel";
import { localStrategyService } from "../../infrastructure/service/passport/strategy/local/localStrategy";
import { googleStrategyService } from "../../infrastructure/service/passport/strategy/google/googleStrategy";

export class AuthController {
  private authCreateUserInterceptor = new AuthCreateUserInterceptor(
    this.repository
  );

  private logoutInterceptor = new LogoutInterceptor(this.repository);
  private refreshTokenInterceptor = new RefreshTokenInterceptor(
    this.repository
  );
  //do-not-delete-me-please-i-am-a-helper

  constructor(private repository: AuthGateway) {}
  //? auth signup
  async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const command = req.body as AuthCreateUserCommand;
      const result = await this.authCreateUserInterceptor.execute(command);
      res.json(result).status(HttpStatusEnum.S201);
    } catch (error) {
      next(error);
    }
  }

  ///*auth strategy
  async localStrategy(req: Request, res: Response, next: NextFunction) {
    localStrategyService(req, res, next, this.repository);
  }
  async googleStrategy(req: Request, res: Response, next: NextFunction) {
    googleStrategyService(req, res, next, this.repository);
  }

  //? auth logout
  async logout(req: Request, res: Response) {
    try {
      const refreshTokenFromCookie = req.cookies[
        Global.REFRESH_TOKEN_COOKIE_NAME
      ] as RefreshTokenModel | undefined;
      console.log("Logout attempt.", refreshTokenFromCookie);
      // Identifier l'utilisateur via AT (même expiré)
      // Toujours effacer le cookie client
      const authHeader = (req.headers.authorization as string) || null;
      const token: string | null = authHeader?.split(" ")[1] || null;

      await this.logoutInterceptor.execute({
        refreshToken: refreshTokenFromCookie?.hashedToken || "",
        refreshTokenId: refreshTokenFromCookie?.id || "",
        token: token!,
      });
      res.clearCookie(Global.REFRESH_TOKEN_COOKIE_NAME);
      res.status(200).json({ message: "Logout successful!" });
    } catch (error) {
      // Toujours effacer le cookie client
      res.clearCookie(Global.REFRESH_TOKEN_COOKIE_NAME);
      res.status(500).json(error);
    }
  }

  // ? refreshToken

  async refreshToken(req: Request, res: Response, next: NextFunction) {
    try {
      const refreshTokenFromCookie = req.cookies[
        Global.REFRESH_TOKEN_COOKIE_NAME
      ] as RefreshTokenModel | undefined;
      console.log('refreshTokenFromCookie11111111', refreshTokenFromCookie)
      const result = await this.refreshTokenInterceptor.execute({
         refreshTokenId: refreshTokenFromCookie?.id || "",
      });
      res.json(result).status(200);
    } catch (error) {
      next(error);
    }
  }
}
