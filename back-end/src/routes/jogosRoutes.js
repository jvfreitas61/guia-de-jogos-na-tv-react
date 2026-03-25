import express from "express";
import JogoController from "../controllers/jogoController.js";

const routes = express.Router();

routes.get("/jogos", JogoController.listarJogos);
/*routes.get("/jogos/:id", JogoController.listarJogoPorId);
routes.get("/jogos/hoje", JogoController.jogosHoje);
routes.get("/jogos/amanha", JogoController.jogosAmanha);*/
routes.post("/jogos", JogoController.cadastrarJogo);
routes.put("/jogos/:id", JogoController.atualizarJogo);
routes.delete("/jogos/:id", JogoController.excluirJogo);

export default routes;