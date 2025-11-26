import { Strategy } from "passport-local";
import { AppError } from "../../../../../../../../shared/error/AppError";
import { ExeptionEnum } from "../../../../../../../../shared/error/ExeptionEnum";
import { HttpStatusEnum } from "../../../../../../../../shared/error/httpStatusEnum";
import { AuthGateway } from "../../../../../../Auth/gateway/AuthGateway";
import { bcryptService } from "../../../bcript/bcriptService";
import { DBAuthRepository } from "../../../../repository/DBAuthRepository";
import passport from "passport";

const authRepository: AuthGateway = new DBAuthRepository();
const error = new AppError({
  data: ["Failed to authenticate with local Strategy"],
  message: "Failed to authenticate",
  status: HttpStatusEnum.S500,
  type: ExeptionEnum.INTERNAL_SERVER_ERROR,
});
passport.use(
  "local",
  new Strategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    // === DEBUT DE LA FONCTION DE VÉRIFICATION ===
    async (email: string, password: string, done: CallableFunction) => {
      console.log(`[Local Strategy] Tentative de connexion pour: ${email}`);
      try {
        // 1. Chercher l'utilisateur dans la base de données via le Repository
        const user = await authRepository.findUserByEmail({ email });

        // 2. Vérifier si l'utilisateur existe
        if (!user) {
          console.log(`[Local Strategy] Utilisateur non trouvé: ${email}`);
          // Pas d'erreur technique, mais l'authentification échoue.
          // Le message sera potentiellement utilisé dans le callback de passport.authenticate.
          error.data = {
            data: [`the user with email ${email} was not found`],
            message: "we could not find the user",
            status: HttpStatusEnum.S401,
            type: ExeptionEnum.AUTHENTICATION_ERROR,
          };
          return done(null, false, {
            ...error.getError(),
          });
        }

        // 3. Vérifier si l'utilisateur a un mot de passe (utile si certains users s'inscrivent via OAuth)
        if (!user.password) {
          console.log(
            `[Local Strategy] Utilisateur ${email} trouvé mais n'a pas de mot de passe défini (peut-être compte OAuth?).`
          );

          error.data = {
            data: [`Wrong  Password the user Password do not match`],
            message: "Invalid User Password",
            status: HttpStatusEnum.S400,
            type: ExeptionEnum.AUTHENTICATION_ERROR,
          };
          return done(null, false, {
            ...error.getError(),
          });
        }

        console.log(
          `[Local Strategy] Utilisateur ${email} trouvé, comparaison du mot de passe...`
        );
        const isPasswordMatching = await bcryptService.compare(
          password,
          user.password
        );
        if (!isPasswordMatching) {
          console.log(`[Local Strategy] Mot de passe incorrect pour: ${email}`);
          error.data = {
            data: [`Wrong Password`],
            message: "Invalid User Password",
            status: HttpStatusEnum.S401,
            type: ExeptionEnum.AUTHENTICATION_ERROR,
          };
          return done(null, false, {
            ...error.getError(),
          });
        }

        console.log(`[Local Strategy] Authentification réussie pour: ${email}`);
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);
