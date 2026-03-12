import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

export async function getCampeonatos() {
  const response = await axios.get(`${URL}/campeonatos`);
  return response.data;
}

export async function getJogos() {
  const response = await axios.get(`${URL}/jogos`);
  return response.data;
}