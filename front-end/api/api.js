import axios from "axios";

const URL = "http://localhost:3000";

const responseCampeonatos = await axios.get(`${URL}/campeonatos`);
const responseJogos = await axios.get(`${URL}/jogos`);

//console.log(responseCampeonatos.data);
//console.log(responseJogos.data);

export const campeonatos = responseCampeonatos.data;
export const jogos = responseJogos.data;