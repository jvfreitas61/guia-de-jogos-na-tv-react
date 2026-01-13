import express from "express";
import CampeonatoController from "../controllers/campeonatoController.js";

const routes = express.Router();

routes.get("/campeonatos", CampeonatoController.listarCampeonatos);
routes.get("/campeonatos/:id", CampeonatoController.listarCampeonatoPorId);
routes.post("/campeonatos", CampeonatoController.cadastrarCampeonato);
routes.put("/campeonatos/:id", CampeonatoController.atualizarCampeonato);
routes.delete("/campeonatos/:id", CampeonatoController.excluirCampeonato);

export default routes;