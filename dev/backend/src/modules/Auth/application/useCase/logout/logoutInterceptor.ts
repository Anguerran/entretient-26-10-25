
import { AuthGateway } from "../../../gateway/AuthGateway";
import { compareRefreshToken, verifyAccessToken } from "../../../utils/tokenHelper";
import { logOutCommand } from "./logoutCommand";

export class LogoutInterceptor {
  constructor(private repository: AuthGateway) {}

  async execute(command: logOutCommand) {
    //{token:string,refreshToken:string}
    try {
      const user = verifyAccessToken(command.token);
      console.log("command");
      console.log("user", command, user);
      // Supprimer le token en BDD (si user identifié et token correspond)
      if (user) {
        const userStoredToken = await this.repository.findRefreshTokenById({
          id: command.refreshTokenId,
        });
        const compareRfT = await compareRefreshToken(
          command.refreshToken,
          userStoredToken?.hashedToken || ""
        );

        console.log("com-------------pareRfT", compareRfT);
        if (userStoredToken && compareRfT) {
          await this.repository.deleteRefreshTokenById({
            id: userStoredToken.id,
          });
          console.log(
            `Logout Controller: Deleted refresh token for user ${command}`
          );
        } else {
          //no user
        }
      } else {
        console.log(
          "Logout Controller: Could not identify user to delete server-side token."
        );
      }
    } catch (error) {
      console.error("Error during server-side logout:", error);
    }
  }
}
export interface cookiePayload {
  refreshToken: string;
  id: string;
}
