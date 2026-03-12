import React, { useState, useEffect } from 'react';
import ListaJogos from '../Components/ListaJogos';
import GuiaJogos from '../Components/GuiaJogos';
import { useParams } from 'react-router-dom';
import { getCampeonatos, getJogos } from "../../api/api";

const Campeonato = () => {
  const { id } = useParams();
  const [campeonatos, setCampeonatos] = useState([]);
  const [jogos, setJogos] = useState([]);
  const [faseAtual, setFaseAtual] = useState(0);

  useEffect(() => {
    async function carregarDados() {
      const dataCampeonatos = await getCampeonatos();
      const dataJogos = await getJogos();

      setCampeonatos(dataCampeonatos);
      setJogos(dataJogos);
    }

    carregarDados();
  }, []);

  const campeonatoSelecionado = campeonatos.find((c) => c._id === id);
  const fases = campeonatoSelecionado?.fases || [];

  // Sempre que o campeonato mudar, reseta pra primeira fase
  useEffect(() => {
    setFaseAtual(0);
  }, [id]);

  // Filtra os jogos do campeonato atual e da fase atual
  const jogosCampeonato = jogos.filter(
    (jogo) =>
      jogo.campeonato === campeonatoSelecionado?.nome &&
      jogo.fase === fases[faseAtual],
  );

  // Evita renderizar antes do campeonato ser definido
  if (!campeonatoSelecionado) {
    return <p>Carregando dados do campeonato...</p>;
  }

  return (
    <>
      <div className="bgTitulo">
        <h1 className="titulo">{campeonatoSelecionado.nome}</h1>
      </div>
      <section className="container">
        <GuiaJogos
          fases={fases}
          faseAtual={faseAtual}
          setFaseAtual={setFaseAtual}
        />
        <ListaJogos
          itemsArray={jogosCampeonato}
          logoCampeonato={campeonatoSelecionado.logo}
          nomeCampeonato={campeonatoSelecionado.nome}
          type="campeonato"
        />
      </section>
    </>
  );
};

export default Campeonato;
