import React, { useState, useEffect, useContext } from 'react';
import ListaJogos from '../Components/ListaJogos';
import GuiaJogos from '../Components/GuiaJogos';
import { DataContext } from "../context/DataContext";
import { getJogosHoje, getJogosAmanha } from '../../api/api';

const Home = () => {
  const dias = ['Hoje', 'Amanhã'];
  const [diaAtual, setDiaAtual] = useState(0);
  /*const { jogos } = useContext(DataContext);

  // Função que retorna a data no formato dd/mm/yyyy (usado no JSON)
  const getData = (offset = 0) => {
    const data = new Date();
    data.setDate(data.getDate() + offset);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  // Função que retorna a data formatada para exibição ("6 de novembro de 2025")
  const formatarDataBonita = (offset = 0) => {
    const data = new Date();
    data.setDate(data.getDate() + offset);
    const opcoes = { day: 'numeric', month: 'long', year: 'numeric' };
    return data.toLocaleDateString('pt-BR', opcoes);
  };

  // Define as datas correspondentes
  const dataOffsets = [0, 1]; // hoje, amanhã
  const dataSelecionada = getData(dataOffsets[diaAtual]);
  const dataFormatada = formatarDataBonita(dataOffsets[diaAtual]);

  // Filtra os jogos pela data selecionada
  const jogosFiltrados = jogos?.filter((jogo) => jogo.dataJogo === dataSelecionada) || [];
*/

const [jogosHoje, setJogosHoje] = useState([]);
const [jogosAmanha, setJogosAmanha] = useState([]);

useEffect(() => {

  async function carregarJogos(){

    const hoje = await getJogosHoje();
    console.log(hoje);
    const amanha = await getJogosAmanha();
    console.log(amanha);

    setJogosHoje(hoje);
    setJogosAmanha(amanha);

  }

  carregarJogos();

}, []);

// Define qual lista mostrar
  const jogosExibidos = diaAtual === 0 ? jogosHoje : jogosAmanha;

  // Data bonita (opcional)
  const data = new Date();
  data.setDate(data.getDate() + diaAtual);

  const dataFormatada = data.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <>
      <div className="bgTitulo">
        <h1 className="titulo">Agenda de Jogos</h1>
      </div>
      <section className="container">
        <GuiaJogos 
          fases={dias} 
          faseAtual={diaAtual} 
          setFaseAtual={setDiaAtual} 
          tituloCustom={`${dias[diaAtual]}, ${dataFormatada}`} 
        />
        
        <ListaJogos itemsArray={jogosExibidos} type="home" />
      </section>
    </>
  );
};

export default Home;
