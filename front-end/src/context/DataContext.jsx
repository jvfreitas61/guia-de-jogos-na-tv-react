import React from 'react'
import { useEffect, useState } from 'react';
import { getCampeonatos, getJogos } from '../../api/api'

export const DataContext = React.createContext();

export const DataProvider = ({children}) => {
  const [campeonatos, setCampeonatos] = useState([]);
  const [jogos, setJogos] = useState([]);

  React.useEffect(() => {
    async function carregarDados(){
      const dataCampeonatos = await getCampeonatos();
      const dataJogos = await getJogos();

      setCampeonatos(dataCampeonatos);
      setJogos(dataJogos);
    }

    carregarDados();
  },[]);

  return (
    <DataContext.Provider value={{campeonatos, jogos}}>
      {children}
    </DataContext.Provider>
  )
}