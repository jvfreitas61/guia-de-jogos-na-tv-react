import React from 'react';
import ListaJogos from '../Components/ListaJogos';
import { Link, useParams } from 'react-router-dom';
import { jogos } from '../database/jogos';
import { campeonatos } from '../database/campeonatos';

const Campeonato = () => {
  const {id} = useParams();
  
  const campeonatoSel = campeonatos.filter((campeonato)=>campeonato.id===id)[0];

  const jogosCampeonato = jogos.filter((jogo, index) => (jogo.campeonato===campeonatoSel.nome));
  console.log(campeonatoSel.logo);

  return (
    <section className="container">
      <ListaJogos itemsArray={jogosCampeonato} logoCampeonato={campeonatoSel.logo} nomeCampeonato={campeonatoSel.nome} type="campeonato" />
    </section>
  );
};

export default Campeonato;
