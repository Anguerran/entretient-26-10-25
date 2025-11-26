// passport-config.ts (or wherever your strategies are defined)

import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import { DBAuthRepository } from "../../../../repository/DBAuthRepository";
import { AuthGateway } from "../../../../../gateway/AuthGateway";
import { Global } from "../../../../../../../Global";
// Assuming you import AuthGateway and AuthUserModel here

const authRepository: AuthGateway = new DBAuthRepository();

passport.use(
  "google", // ⬅️ The strategy name
  new GoogleStrategy(
    {
      // 🔑 Get these from your Google Cloud Console and environment variables
      clientID: Global.GOOGLE.GOOGLE_CLIENT_ID!,
      clientSecret: Global.GOOGLE.GOOGLE_CLIENT_SECRET!,
      callbackURL: Global.GOOGLE.GOOGLE_CALLBACK_URL,
      scope:"   "
    },
    // 🎯 VERIFY CALLBACK FUNCTION
    async (
      accessToken: string,
      refreshToken: string,
      profile: passport.Profile, // Use Passport's generic Profile type
      done: CallableFunction
    ) => {
      try {
        // 1. Try to find the user by the unique Google ID

        // eslint-disable-next-line prefer-const
        let user = await authRepository.findUserByGoogleId({
          googleId: profile.id,
        });

        if (user) {
          // User exists, complete authentication
          console.log("user", user);
          return done(null, user);
        } else {
          // User doesn't exist, create a new user record
          const newUser = await authRepository.createUser({
            googleId: profile.id,
            email: (profile.emails && profile.emails[0].value) || "",
            firstName: profile.displayName,
            lastName: "",
            role: "client",
            // Include any other required fields
          });
          return done(null, newUser);
        }
      } catch (err) {
        // Handle any database or technical errors
        return done(err);
      }
    }
  )
);
