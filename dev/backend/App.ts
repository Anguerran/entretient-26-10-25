import { ClientRoutes } from "./src/modules/Client/presentation/router/ClientRoutes";
import { ClientRouter } from "./src/modules/Client/presentation/router/ClientRouter";
// import { AuthRoutes } from "./src/modules/Auth/presentation/router/AuthRoutes";
// import { authRouter } from "./src/modules/Auth/presentation/router/AuthRouter";
import 'dotenv/config'
import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { AppError, ErrorModel } from "./shared/error/AppError";
import cookieParser from "cookie-parser";
import passport from "passport";
// import "./src/modules/Auth/infrastructure/service/jwt/jwtService";
// import "./src/modules/Auth/infrastructure/service/passport/strategy/local/localStrategyConfig";
// import "./src/modules/Auth/infrastructure/service/passport/strategy/google/googleStrategyConfig";
import { Global } from "./src/Global";
const app = express();

app.use(
  cors({
    origin: "http://localhost:3002",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser()); // <= IMPORTANT pour lire req.cookies
app.use(passport.initialize());

// app.use(AuthRoutes.base, authRouter);
app.use(ClientRoutes.base,ClientRouter)
//do-no-delete-me-please


// the comment above help locate where to place the router
app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error: ErrorModel, req: Request, res: Response, _next: NextFunction) => {
    const err = new AppError(error).getError();
    console.log("error", error);
    res.status(err.status).json(err);
  }
);
app.listen(Global.APP_PORT, () => {});

export default app;
