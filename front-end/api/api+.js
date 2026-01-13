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
