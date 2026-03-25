import React, { useState, useEffect, useContext } from 'react';
import ListaJogos from '../Components/ListaJogos';
import GuiaJogos from '../Components/GuiaJogos';
import { useParams } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import { getJogosPorFase } from '../../api/api';

const Campeonato = () => {
  const { id } = useParams();
  const { campeonatos } = useContext(DataContext);
  const [faseAtual, setFaseAtual] = useState(0);
  const [jogosCampeonato, setJogosCampeonato] = useState([]);
  const campeonatoSelecionado = campeonatos.find((c) => c._id === id);
  const fases = campeonatoSelecionado?.fases || [];

  // Sempre que o campeonato mudar, reseta pra primeira fase
  useEffect(() => {
    setFaseAtual(0);
  }, [id]);

  /*// Filtra os jogos do campeonato atual e da fase atual
  const jogosCampeonato = jogos?.filter(
    (jogo) =>
      jogo.campeonato === campeonatoSelecionado?.nome &&
      jogo.fase === fases[faseAtual],
  ) || [];*/

  useEffect(() => {
    async function carregarJogos(){
      if(!campeonatoSelecionado) return;

      const fase = fases[faseAtual];

      const data = await getJogosPorFase(
        campeonatoSelecionado.nome,
        fase
      );

      setJogosCampeonato(data);
    }

    carregarJogos();
  }, [campeonatoSelecionado, faseAtual]);

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
