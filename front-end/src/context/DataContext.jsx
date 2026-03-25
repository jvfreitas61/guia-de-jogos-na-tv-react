import React from 'react'
import { useEffect, useState } from 'react';
import { getCampeonatos, getJogos } from '../../api/api'

export const DataContext = React.createContext();

export const DataProvider = ({children}) => {
  const [campeonatos, setCampeonatos] = useState([]);
  //const [jogos, setJogos] = useState([]);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    async function carregarDados(){
      /*const dataCampeonatos = await getCampeonatos();
      const dataJogos = await getJogos();
      setCampeonatos(dataCampeonatos);
      setJogos(dataJogos);*/

      try{
        const dataCampeonatos = await getCampeonatos();
        setCampeonatos(dataCampeonatos);
      }catch(erro){
        console.error("Erro ao carregar campeonatos", erro);
      }finally{
        setLoading(false);
      }
    }

    carregarDados();
  },[]);

  return (
    <DataContext.Provider 
      value={{campeonatos, loading}}>
      {children}
    </DataContext.Provider>
  )
}