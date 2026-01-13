import mongoose from "mongoose";

const jogoSchema = new mongoose.Schema({
  campeonato: {type: String},
  logoCampeonato: {type: String},
  fase: {type: String},
  dataJogo: {type: String},
  horaJogo: {type: String},
  mandante: {
    nome: {type: String},
    escudo: {type: String}
  },
  visitante: {
    nome: {type: String},
    escudo: {type: String}
  },
  transmissao: [
    {
      nomeCanal: {type: String},
      logoCanal: {type: String}
    }
  ]
}, {versionKey: false});

const jogo = mongoose.model("jogos", jogoSchema);

export default jogo;