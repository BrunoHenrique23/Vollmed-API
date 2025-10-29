/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";
import {
  atualizaHorarioConsulta,
  buscaConsultaPorId,
  criaConsulta,
  deletaConsulta,
  listaConsultas,
} from "./consultaController";
import errorMiddleware from "../error/errorMiddleware";
import { verificaTokenJWT } from "../auth/verificaTokenJWT";

export const consultaRouter = Router();
consultaRouter.post("/",verificaTokenJWT(), criaConsulta);
consultaRouter.get("/", listaConsultas);
consultaRouter.get("/:id",verificaTokenJWT(), buscaConsultaPorId);
consultaRouter.patch("/:id",verificaTokenJWT(), atualizaHorarioConsulta);
consultaRouter.delete("/:id", verificaTokenJWT(),deletaConsulta);

export default (app) => {
  app.use("/consulta", consultaRouter);
};
