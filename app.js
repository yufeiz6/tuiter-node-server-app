import express from 'express'
import session from "express-session";
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js"
import UserController from "./users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
import AuthController from "./users/auth-controller.js";

const app = express()
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
 ); 
app.use(
  session({
    secret: "any string",
    resave: false,
    saveUninitialized: true,
  })
 ); 
app.use(express.json());
HelloController(app)
TuitsController(app);
UserController(app)
AuthController(app);
app.listen(process.env.PORT || 4000);