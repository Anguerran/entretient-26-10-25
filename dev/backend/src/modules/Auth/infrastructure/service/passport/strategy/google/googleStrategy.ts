import { NextFunction, Request, Response } from "express";
import { IVerifyOptions } from "passport-local";
import passport from "passport";
import { AppError } from "../../../../../../../../shared/error/AppError";
import { HttpStatusEnum } from "../../../../../../../../shared/error/httpStatusEnum";
import { ExeptionEnum } from "../../../../../../../../shared/error/ExeptionEnum";
import { AuthUserModel } from "../../../../../model/AuthUserModel";
import { AuthGateway } from "../../../../../../Auth/gateway/AuthGateway";
import { PassportAuthCallBack } from "../../PassportAuthCallBack";

export const googleStrategyService = async (
  req: Request,
  res: Response,
  next: NextFunction,
  authRepository: AuthGateway
) => {
  const baseError = new AppError({
    data: ["failed to autheticate with google strategy"], // ⬅️ Adjusted error message
    message: "failed to authenticate",
    status: HttpStatusEnum.S500,
    type: ExeptionEnum.INTERNAL_SERVER_ERROR,
  });

  // 🎯 Swap 'local' for 'google'
  passport.authenticate(
    "google",
    { session: false, scope: ["profile", "email"] },

    async (
      err: Error | null,
      user: AuthUserModel | false,
      info?: IVerifyOptions
    ) => {
      return PassportAuthCallBack({
        authRepository,
        err,
        next,
        rejetError: baseError,
        req,
        res,
        user,
        info,
      });
    }
  )(req, res, next);
  
};
