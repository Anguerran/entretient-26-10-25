// handleAuthCallback.ts

import { Request, Response, NextFunction } from "express";
import { HttpStatusEnum } from "../../../../../../shared/error/httpStatusEnum";
import { AuthGateway } from "../../../../Auth/gateway/AuthGateway";
import { AuthUserModel } from "../../../model/AuthUserModel";
import { IVerifyOptions } from "passport-local";
import { CreateTokenInterceptor } from "../../../../Auth/application/useCase/CreateRefreshToken/CreateTokenInterceptor";
import { Global } from "../../../../../Global";
import { AppError } from "../../../../../../shared/error/AppError";

// ... imports ...

export const PassportAuthCallBack = async ({
  authRepository,
  err,
  rejetError,
  res,
  user,
  info,
}: PassportAuthCallBackParams) => {
  // ⚠️ Place your provided logic here ⚠️
  const createTokenInterceptor = new CreateTokenInterceptor(authRepository);
  // You need to define the 'error' object here or pass it in,
  // based on how your AppError class works.

  if (err) {
    const e = rejetError.getError(err);
    return res.status(e.status).json(e);
  }
  if (!user) {
    return res.status(HttpStatusEnum.S401).json(info);
  }
  const tokenAccess = await createTokenInterceptor.execute(user);
  const cookieName = Global.REFRESH_TOKEN_COOKIE_NAME;

  res.cookie(cookieName, tokenAccess.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: tokenAccess.refreshToken.expiresAt,
  });
  return res.status(HttpStatusEnum.S200).json(tokenAccess.accessToken); // Ensure only one res.end()
};

export interface PassportAuthCallBackParams {
  req: Request;
  res: Response;
  next: NextFunction;
  authRepository: AuthGateway;
  err: Error | null;
  user: AuthUserModel | false;
  rejetError: AppError;
  info?: IVerifyOptions;
}
