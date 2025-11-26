
import { FindUserByGoogleIdCommand } from "../application/useCase/findUserByGoogleId/findUserByGoogleIdCommand";
import { FindUserByGoogleIdResponse } from "../application/useCase/findUserByGoogleId/findUserByGoogleIdResponse";
// src/repositories/IAuthRepository.ts

import { AuthCreateUserCommand } from "../application/useCase/createUser/authCreateUserCommand";
import { AuthCreateUserResponse } from "../application/useCase/createUser/authCreateUserResponse";
import { AuthFindUserByMailCommand } from "../application/useCase/findUserByEmail/authFindUserByMailCommand";
import { AuthFindUserByMailResponse } from "../application/useCase/findUserByEmail/authFindUserByMailResponse";
import { AuthFindUserByIdCommand } from "../application/useCase/findUserById/authFindUserByIdCommand";
import { FindUserByIdResponse } from "../application/useCase/findUserById/authFindUserByIdResponse";
import { CreateRefreshTokenCommand } from "../application/useCase/CreateRefreshToken/CreateTokenCommand";
import { FindRFTokenByUserIdResponse } from "../application/useCase/FindRfTokenByUserId/FindRfTokenByUserIdResponse";
import { CreateRefreshTokenResponse } from "../application/useCase/CreateRefreshToken/CreateTokenResponse";
import { DeleteRfTokenByIdCommand } from "../application/useCase/deleteRefreshToken/DeleteRfTokenByIdCommand";
import { FindRfTokenByIdCommand } from "../application/useCase/findRfTokenById/FindRfTokenByIdCommand";
import { DeleteRfTokenByIdResponse } from "../application/useCase/deleteRefreshToken/DeleteRfTokenByIdResponse";
import { DeleteRfTokenByUserIdCommand } from "../application/useCase/deleteRfTokenByUserId/DeleteRfTokenByUserIdCommand";
import { FindRfTOkenByIdResponse } from "../application/useCase/findRfTokenById/FindRfTokenByIdResponse";
import { DeleteRfTokenByUserIdResponse } from "../application/useCase/deleteRfTokenByUserId/DeleteRfTokenByUserIdResponse";
import { FindRfTokenByUserIdCommand } from "../application/useCase/FindRfTokenByUserId/findRfTokenByUserIdCommand";

export interface AuthGateway {
  createUser: (
    command: AuthCreateUserCommand
  ) => Promise<AuthCreateUserResponse>;
  authFindUserById: ( 
    command: AuthFindUserByIdCommand
  ) => Promise<FindUserByIdResponse>;
  findUserByEmail: (
    command: AuthFindUserByMailCommand
  ) => Promise<AuthFindUserByMailResponse>;
  saveRefreshToken: (
    command: CreateRefreshTokenCommand
  ) => Promise<CreateRefreshTokenResponse>;
  findRefreshTokenByUserId: (
    command: FindRfTokenByUserIdCommand
  ) => Promise<FindRFTokenByUserIdResponse>;
  findRefreshTokenById: (
    command: FindRfTokenByIdCommand
  ) => Promise<FindRfTOkenByIdResponse>;
  deleteRefreshTokenById: (
    command: DeleteRfTokenByIdCommand
  ) => Promise<DeleteRfTokenByIdResponse>;
  deleteAllRefreshTokensByUserId: (
    command: DeleteRfTokenByUserIdCommand
  ) => Promise<DeleteRfTokenByUserIdResponse>;
findUserByGoogleId:(command:FindUserByGoogleIdCommand)=>Promise<FindUserByGoogleIdResponse>
 }