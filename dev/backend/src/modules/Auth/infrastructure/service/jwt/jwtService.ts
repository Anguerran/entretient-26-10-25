// import passport from "passport";
// import {
//   Strategy as JwtStrategy,
//   ExtractJwt,
//   StrategyOptions,
// } from "passport-jwt";
// // import { AuthGateway } from "../../../../Auth/gateway/AuthGateway";
// // import { DBAuthRepository } from "../../repository/DBAuthRepository";
// // const authRepository: AuthGateway = new DBAuthRepository();
// // --- Configuration Stratégie JWT (pour vérifier les Access Tokens) ---
// const jwtOptions: StrategyOptions = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extrait 'Bearer <token>'
//   secretOrKey: process.env.ACCESS_TOKEN_SECRET!, // Clé secrète pour vérifier la signature
// };


// passport.use(
//   "jwt",
//   new JwtStrategy(jwtOptions, async (payload, done) => {
//     try {
//       console.log("JWT Strategy - Payload received:", payload);
//       const user = await authRepository.authFindUserById({
//         id: payload.userId,
//       });

//       if (user) {
//         // L'utilisateur existe, l'authentification réussit
//         // On passe l'objet UserDocument pour qu'il soit mis dans req.user
//         console.log("JWT Strategy - User found:", user.firstName);
//         return done(null, user);
//       } else {
//         // L'utilisateur n'existe plus (ou token invalide d'une autre manière)
//         console.log("JWT Strategy - User not found for ID:", payload.userId);
//         return done(null, false); // Authentification échoue
//       }
//     } catch (error) {
//       console.error("JWT Strategy - Error:", error);
//       return done(error, false); // Erreur serveur
//     }
//   })
// );
