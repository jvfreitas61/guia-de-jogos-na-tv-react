import mongoose from "mongoose";

const campeonatoSchema = new mongoose.Schema({
  nome: {type: String, required: true},
  logo: {type: String},
  tipo: {type: String},
  fases: [
    
  ]
}, {versionKey: false});

const campeonato = mongoose.model("campeonatos", campeonatoSchema);

export {campeonato, campeonatoSchema};