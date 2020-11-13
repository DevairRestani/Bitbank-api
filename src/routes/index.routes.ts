import { Router } from "express";
import loginRouter from "./login.routes";
import usuariosRouter from "./Usuarios.routes";
import recSenha from "./RecuperarSenha.routes";

const routes = Router();

routes.use("/usuarios", usuariosRouter);
routes.use("/recuperarSenha", recSenha);
routes.use("/login", loginRouter);

export default routes;
