// import prisma from "../../../../../prisma/prisma";
// import { CreateRefreshTokenCommand } from "../../../Auth/application/useCase/CreateRefreshToken/CreateTokenCommand";
// import { CreateRefreshTokenResponse } from "../../../Auth/application/useCase/CreateRefreshToken/CreateTokenResponse";
// import { AuthCreateUserCommand } from "../../../Auth/application/useCase/createUser/authCreateUserCommand";
// import { AuthCreateUserResponse } from "../../../Auth/application/useCase/createUser/authCreateUserResponse";
// import { DeleteRfTokenByIdCommand } from "../../../Auth/application/useCase/deleteRefreshToken/DeleteRfTokenByIdCommand";
// import { DeleteRfTokenByIdResponse } from "../../../Auth/application/useCase/deleteRefreshToken/DeleteRfTokenByIdResponse";
// import { DeleteRfTokenByUserIdCommand } from "../../../Auth/application/useCase/deleteRfTokenByUserId/DeleteRfTokenByUserIdCommand";
// import { DeleteRfTokenByUserIdResponse } from "../../../Auth/application/useCase/deleteRfTokenByUserId/DeleteRfTokenByUserIdResponse";
// import { FindRfTokenByIdCommand } from "../../../Auth/application/useCase/findRfTokenById/FindRfTokenByIdCommand";
// import { FindRfTOkenByIdResponse } from "../../../Auth/application/useCase/findRfTokenById/FindRfTokenByIdResponse";
// import { FindRfTokenByUserIdCommand } from "../../../Auth/application/useCase/FindRfTokenByUserId/findRfTokenByUserIdCommand";
// import { FindRFTokenByUserIdResponse } from "../../../Auth/application/useCase/FindRfTokenByUserId/FindRfTokenByUserIdResponse";
// import { AuthFindUserByMailCommand } from "../../../Auth/application/useCase/findUserByEmail/authFindUserByMailCommand";
// import { AuthFindUserByMailResponse } from "../../../Auth/application/useCase/findUserByEmail/authFindUserByMailResponse";
// import { AuthFindUserByIdCommand } from "../../../Auth/application/useCase/findUserById/authFindUserByIdCommand";
// import { FindUserByIdResponse } from "../../../Auth/application/useCase/findUserById/authFindUserByIdResponse";
// import { AuthGateway } from "../../../Auth/gateway/AuthGateway";
// import { FindUserByGoogleIdCommand } from "../../application/useCase/findUserByGoogleId/findUserByGoogleIdCommand";
// import { FindUserByGoogleIdResponse } from "../../application/useCase/findUserByGoogleId/findUserByGoogleIdResponse";

// export class DBAuthRepository implements AuthGateway {
//   private User = prisma.user;
//   private RefreshToken = prisma.refreshToken;
//   async createUser(
//     command: AuthCreateUserCommand
//   ): Promise<AuthCreateUserResponse> {
//     const res = await this.User.create({ data: command });
//     return res;
//   }

//   async authFindUserById(
//     command: AuthFindUserByIdCommand
//   ): Promise<FindUserByIdResponse> {
//     const res = await this.User.findUnique({ where: { id: command.id } });
//     return res;
//   }
//   async findUserByEmail(
//     command: AuthFindUserByMailCommand
//   ): Promise<AuthFindUserByMailResponse> {
//     const res = await this.User.findUnique({ where: { email: command.email } });
//     return res;
//   }

//   async saveRefreshToken(
//     command: CreateRefreshTokenCommand
//   ): Promise<CreateRefreshTokenResponse> {
//     const res = await this.RefreshToken.create({ data: command });
//     return res;
//   }
//   async findRefreshTokenById(
//     command: FindRfTokenByIdCommand
//   ): Promise<FindRfTOkenByIdResponse> {
//     const res = await this.RefreshToken.findUnique({
//       where: { id: command.id },
//     });
//     return res;
//   }
//   async deleteRefreshTokenById(
//     command: DeleteRfTokenByIdCommand
//   ): Promise<DeleteRfTokenByIdResponse> {
//     const res = await this.RefreshToken.delete({ where: { id: command.id } });
//     return res;
//   }
//   async findRefreshTokenByUserId(
//     command: FindRfTokenByUserIdCommand
//   ): Promise<FindRFTokenByUserIdResponse> {
//     const res = await this.RefreshToken.findMany({
//       where: { userId: command.userId },
//     });
//     return res;
//   }
//   async deleteAllRefreshTokensByUserId(
//     command: DeleteRfTokenByUserIdCommand
//   ): Promise<DeleteRfTokenByUserIdResponse> {
//     const res = await this.RefreshToken.deleteMany({
//       where: { userId: command.id },
//     });
//     return res.count;
//   }
//   async findUserByGoogleId(
//     command: FindUserByGoogleIdCommand
//   ): Promise<FindUserByGoogleIdResponse | null> {
//     const res = await this.User.findFirst({ where: command });
//     return res;
//   }
// }
