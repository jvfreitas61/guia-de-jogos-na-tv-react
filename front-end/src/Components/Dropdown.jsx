import React from 'react';
import styles from './Dropdown.module.css'
import { NavLink } from 'react-router-dom';

const Dropdown = ({titulo, tipo, campeonatos, mobile}) => {
  return (
    <div className={styles.dropdown}>
      <span className={styles.dropdownButton}>{titulo}</span>
      <div className={mobile ? styles.dropdownMob : styles.dropdownMenu}>
        {campeonatos
          ?.filter((campeonato) => campeonato.tipo === tipo)
          .sort((a,b) => a.nome.localeCompare(b.nome))
          .map((campeonato) => (
            <NavLink
              to={`/campeonato/${campeonato._id}`}
              className = {`${mobile ? styles.linkMobile : styles.link}`}
              
              key={`campeonato-${campeonato._id}`}
            >
              {campeonato.nome}
            </NavLink>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
