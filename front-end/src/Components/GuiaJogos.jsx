import React from 'react';
import Voltar from '../Assets/angle-small-left.svg?react';
import Avancar from '../Assets/angle-small-right.svg?react';
import styles from './GuiaJogos.module.css';

const GuiaJogos = ({ fases, faseAtual, setFaseAtual, tituloCustom }) => {

  const handleAvançar = () => {
    if (faseAtual < fases.length - 1) {
      setFaseAtual(faseAtual + 1);
    }
  };

  const handleVoltar = () => {
    if (faseAtual > 0) {
      setFaseAtual(faseAtual - 1);
    }
  };

  return (
      <div className={styles.guia}>
        <button className={styles.btnVoltar} onClick={handleVoltar}>
          <Voltar  />
        </button>
        <h1 className={styles.tituloGuia}>{tituloCustom || fases[faseAtual]}</h1>
        <button className={styles.btnAvancar} onClick={handleAvançar}>
          <Avancar  />
        </button>
      </div>
  );
};

export default GuiaJogos;
