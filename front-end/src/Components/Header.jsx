import React from "react";
import styles from './Header.module.css'
import { Link, useLocation } from "react-router-dom";
import Menu from '../Assets/menu-burger.svg?react';
import useMedia from "../Hooks/useMedia";
import {campeonatos} from "../database/campeonatos"

const Header = () => {

  const mobile = useMedia('(max-width: 980px)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const {pathname} = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
  <header className={styles.header}>
    <button onClick={()=> setMobileMenu(!mobileMenu)} className={`${styles.btnMenu} ${mobile ? styles.btnAtivo : styles.btnInativo}`}>
    <Menu />
    </button>
    {/*
    <menu id="menu">
      <div className={styles.headerMenu}>
      <button className={styles.btnFechar}>
        <Fechar />
      </button>
      <h1 className={styles.tituloMenu}>MENU</h1>
      </div>
      <ul>
        <li>
        <Link to="/" className={styles.link}>JOGOS DE HOJE</Link>
        </li>
      <li>
      <Link to="/brasileiro-serie-a" className={styles.link}>BRASILEIRÃO SERIE A</Link>
      </li>
      <li>
      <Link to="/copa-do-brasil" className={styles.link}>COPA DO BRASIL</Link>
      </li>
      <li>
      <Link to="/libertadores" className={styles.link}>COPA LIBERTADORES</Link>  
      </li>
      
      </ul>
    </menu>*/}
    <h1>GUIA DE JOGOS NA TV</h1>    
    <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileAtivo}`}>
      <Link to="/" end className={`${mobile ? styles.linkMobile : styles.link}`}>Agenda de Jogos</Link>
      {campeonatos.map((campeonato) => (<Link to={`/campeonato/${campeonato._id}`} className={`${mobile ? styles.linkMobile : styles.link}`} key={`campeonato-${campeonato._id}`}>{campeonato.nome}</Link>))}
    </nav>
  </header>
  </>
  );
};

export default Header;