import React, { useState } from 'react';
import { useContext } from 'react';
import styles from './Header.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import Menu from '../Assets/menu-burger.svg?react';
import useMedia from '../Hooks/useMedia';
import { DataContext } from '../context/DataContext';
import Dropdown from './Dropdown';

const Header = () => {
  const { campeonatos } = useContext(DataContext);
  const mobile = useMedia('(max-width: 980px)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  if (!campeonatos.length) {
    return <header className={styles.header}>Carregando...</header>;
  }

  const dropdowns = [
    {titulo: "Campeonatos", tipo: "liga"},
    {titulo: "Copas", tipo: "copa"},
    {titulo: "Competições Internacionais", tipo: "internacional"},
  ]

  return (
    <>
      <header className={styles.header}>
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${styles.btnMenu} ${mobile ? styles.btnAtivo : styles.btnInativo}`}
        >
          <Menu />
        </button>

        <h1>GUIA DE JOGOS NA TV</h1>
        <nav
          className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileAtivo}`}
        >
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${mobile ? styles.linkMobile : styles.link} ${isActive ? styles.active : ''}`
            }
          >
            Agenda de Jogos
          </NavLink>
        
          {dropdowns.map((categorias) => (
            <Dropdown
              key={categorias.titulo}
              titulo = {categorias.titulo}
              tipo = {categorias.tipo}
              campeonatos = {campeonatos}
              mobile = {mobile}
            />
          ))}

        </nav>
      </header>
    </>
  );
};

export default Header;
