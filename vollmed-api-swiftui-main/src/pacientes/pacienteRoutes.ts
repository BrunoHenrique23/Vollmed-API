import { Router } from "express";
import {
  lerPacientes,
  criarPaciente,
  lerPaciente,
  atualizarPaciente,
  desativaPaciente,
  listaConsultasPaciente,
} from "./pacienteController";
import { verificaTokenJWT } from "../auth/verificaTokenJWT";

export const pacienteRouter = Router();

pacienteRouter.get("/", lerPacientes);
pacienteRouter.post("/", criarPaciente);
pacienteRouter.get("/:id", lerPaciente);
pacienteRouter.get("/:id/consultas",verificaTokenJWT(), listaConsultasPaciente);
pacienteRouter.put("/:id", verificaTokenJWT(), atualizarPaciente);
pacienteRouter.delete("/:id",verificaTokenJWT(), desativaPaciente);
export default (app) => {
  app.use("/paciente", pacienteRouter);
};
