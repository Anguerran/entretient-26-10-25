import { Global } from "../../../../Global";

export const AuthRoutes = {
  base: "/auth",
  signup: "/signup",
  logout: "/logout",
  loginLocal: "/login/local",
  google: { base: "/google", callback:Global.GOOGLE.GOOGLE_CALLBACK_URL!},
  refreshToken:"/refreshToken"
}
