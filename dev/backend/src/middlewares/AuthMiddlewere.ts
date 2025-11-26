import passport from "passport";
export const authMiddlewere = passport.authenticate("jwt", { session: false });
