import React, { useEffect, useState } from 'react';
import styles from './ListaJogos.module.css';
import Jogo from './Jogo';

function ListaJogos({ itemsArray, logoCampeonato, type }) {
  return (
    <div>
      <div className={styles.containerJogos}>
        <ul id="tabelaJogos" className={styles.tabelaJogos}>
          {itemsArray.map((jogo, index) =>
            type === 'campeonato' ? (
              <Jogo
                {...jogo}
                logoCampeonato={logoCampeonato}
                key={`jogo-${index}`}
              />
            ) : (
              <Jogo {...jogo} key={`jogo-${index}`} />
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
export default ListaJogos;
