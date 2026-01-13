import mongoose from "mongoose";

const timeSchema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId },
  nome: {type: String, require: true},
  escudo: {type: String},
}, {versionKey: false});

const time = mongoose.model("times", timeSchema);

export { time, timeSchema };