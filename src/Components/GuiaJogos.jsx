import React from 'react';
import Voltar from '../Assets/angle-small-left.svg?react';
import Avancar from '../Assets/angle-small-right.svg?react';
import styles from './GuiaJogos.module.css';

const GuiaJogos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = itemsArray.map((jogo, index) => jogo.fase);

  const nextList = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevList = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <div className={styles.guia}>
        <button className={styles.btnVoltar}>
          <Voltar onClick={prevList} />
        </button>
        <h1 className={styles.tituloGuia}>HOJE, 14 de setembro de 2024</h1>
        <button className={styles.btnAvancar}>
          <Avancar onClick={nextList} />
        </button>
      </div>
    </>
  );
};

export default GuiaJogos;
