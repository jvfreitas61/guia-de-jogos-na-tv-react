import express from "express";
import cors from "cors";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão com o banco feita com sucesso!")
});

const app = express();

app.use(cors());
app.use(express.json());

routes(app);

export default app;