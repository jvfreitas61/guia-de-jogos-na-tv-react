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

export async function getJogosHoje(){
  //const response = await axios.get("/jogos/hoje");
  const response = await axios.get(`${URL}/jogos?dia=hoje`);
  return response.data;
}

export async function getJogosAmanha(){
  //const response = await axios.get("/jogos/amanha");
  const response = await axios.get(`${URL}/jogos?dia=amanha`);
  return response.data;
}

export async function getJogosPorFase(campeonato, fase) {

  const response = await axios.get(`${URL}/jogos`, {
    params: {
      campeonato: campeonato,
      fase: fase
    }
  });

  return response.data;

}