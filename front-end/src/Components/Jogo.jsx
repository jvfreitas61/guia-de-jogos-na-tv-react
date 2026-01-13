import React from 'react'
import styles from './Jogo.module.css'
import Trophy from '../Assets/trophy.svg'
import Screen from '../Assets/screen.svg'

const Jogo = ({
  logoCampeonato = '',
  campeonato = '',
  dataJogo = '', 
  horaJogo = '',
  mandante = [],
  visitante = [],
  transmissao = [],
  }) => {
    
  return (
    <div className={styles.jogo}>
      <div className={styles.jogoHeader}>
        <span className={styles.logoCompetition}><img src={logoCampeonato} alt="Logo da competição" /></span>
        <p className={styles.tituloJogo}>{campeonato}</p>
      </div>
      <div className={styles.infoJogo}>
        
        <div className={styles.confronto}>
          <div className={styles.timeMandante}>
            <span className={styles.logoTime}><img src={mandante.escudo} alt={mandante.nome} /></span>
            <span className={styles.nomeTime}>{mandante.nome}</span>
          </div>
          <div className={styles.timeVisitante}>
            <span className={styles.logoTime}><img src={visitante.escudo} alt={visitante.nome} /></span>
            <span className={styles.nomeTime}>{visitante.nome}</span>
          </div>
        </div>
        <div className={styles.agendaJogo}>
          <p>{dataJogo}</p>
          <p>{horaJogo}</p>
        </div>
      </div>
      <div className={styles.transmissao}>
        <img className={styles.logoScreen} src={Screen} alt="" />
        <ul className={styles.canais}>
          {transmissao.map((canal, index) => (
              <li key={index}>
                <img className={styles.logoTransmissao} src={canal.logoCanal} alt={canal.nomeCanal} title={canal.nomeCanal} />
              </li>
          ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Jogo