import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export async function campeonatos() {
  const response = await api.get("/campeonatos");
  return response.data;
}

export async function jogos() {
  const response = await api.get("/jogos");
  return response.data;
}
//const responseCampeonatos = await axios.get(`${URL}/campeonatos`);
//const responseJogos = await axios.get(`${URL}/jogos`);

//export const campeonatos = responseCampeonatos.data;
//export const jogos = responseJogos.data;