import React from "react";
import { useContext } from "react";
import styles from './Header.module.css'
import { NavLink, useLocation } from "react-router-dom";
import Menu from '../Assets/menu-burger.svg?react';
import useMedia from "../Hooks/useMedia";
import { DataContext } from "../context/DataContext";

const Header = () => {
  const {campeonatos} = useContext(DataContext);
  const mobile = useMedia('(max-width: 980px)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const {pathname} = useLocation();
  
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  if (!campeonatos.length) {
    return <header className={styles.header}>Carregando...</header>;
  }

  return (
    <>
  <header className={styles.header}>
    <button onClick={()=> setMobileMenu(!mobileMenu)} className={`${styles.btnMenu} ${mobile ? styles.btnAtivo : styles.btnInativo}`}>
    <Menu />
    </button>

    <h1>GUIA DE JOGOS NA TV</h1>    
    <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileAtivo}`}>
      <NavLink to="/" end className={({ isActive }) =>
  `${mobile ? styles.linkMobile : styles.link} ${isActive ? styles.active : ""}`}>Agenda de Jogos</NavLink>
        {campeonatos?.map((campeonato) => (
          <NavLink 
            to={`/campeonato/${campeonato._id}`} 
            className={({ isActive }) =>
              `${mobile ? styles.linkMobile : styles.link} ${isActive ? styles.active : ""}`} 
            key={`campeonato-${campeonato._id}`}>{campeonato.nome}
          </NavLink>
        ))}
    </nav>
  </header>
  </>
  );
};

export default Header;