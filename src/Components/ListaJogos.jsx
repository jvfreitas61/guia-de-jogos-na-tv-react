import React, { useEffect, useState } from 'react'
import styles from './ListaJogos.module.css'
import Jogo from './Jogo';

function ListaJogos({itemsArray , nomeCampeonato ,logoCampeonato, type}){
  
  return (
    <div>
    
    <div className={styles.guia}>
          
          <h1 className={styles.tituloGuia}>{type==="campeonato"?nomeCampeonato:"Agenda de Jogos"}</h1>
          
        </div>
    
    <div className={styles.containerJogos}>
    <ul id='tabelaJogos' className={styles.tabelaJogos}>
      {itemsArray
      /*.filter((jogo, index) => (jogo.dataJogo === '12/03/2025'))*/
      .map((jogo, index) => (
        
        type==="campeonato"?
        <Jogo {...jogo} logoCampeonato={logoCampeonato} key={`jogo-${index}`}/>
        : <Jogo {...jogo} key={`jogo-${index}`}/>
      ))}
    </ul>
    </div>
    
    </div>
  )
}
export default ListaJogos