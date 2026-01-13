import express from "express";
import jogos from "./jogosRoutes.js";
import campeonatos from "./campeonatosRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Guia de Jogos na TV"));

  app.use(express.json(), jogos, campeonatos);
};

export default routes;