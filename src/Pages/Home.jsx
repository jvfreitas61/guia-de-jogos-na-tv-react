import React from 'react'
import ListaJogos from '../Components/ListaJogos';
import {jogos} from "../database/jogos"

const Home = () => {
  return (
    <section className='container'>
      <ListaJogos itemsArray={jogos} />
    </section>
  )
}

export default Home