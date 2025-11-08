export const campeonatos = [
    {
      id: "1",
      nome: "Campeonato Brasileiro",
      logo: "https://upload.wikimedia.org/wikipedia/pt/7/75/Campeonato_Brasileiro_de_Futebol_de_2024_-_S%C3%A9rie_A.png",
      tipo: 'pontos-corridos',
      /*fases: Array.from({ length: 38 }, (_, i) => `${i + 1}ª Rodada`),*/
      fases: [
        '33ª Rodada',
        'Jogos Atrasados',
        
        
      ],
  },
  {
      id: "2",
      nome: "Copa do Brasil",
      logo: "https://www.ogol.com.br//img/logos/competicoes/260_imgbank_cb_20180423113604.png",
      tipo: 'mata-mata',
        fases: [
        /*'Primeira Fase',
        'Segunda Fase',
        'Terceira Fase',
      'Oitavas de Final',
      'Quartas de Final',*/
      'Semifinal (1º Jogo)',
      'Semifinal (2º Jogo)',
      /*'Final',*/
    ],
  },
  {
      id: "3",
      nome: "Copa Libertadores",
      logo: "https://upload.wikimedia.org/wikipedia/pt/thumb/9/95/Conmebol_Libertadores_logo.svg/307px-Conmebol_Libertadores_logo.svg.png",
      tipo: 'misto',
    fases: [
      /*'Fase Preliminar 1',
      'Fase Preliminar 2',
      'Fase de Grupos',
      'Oitavas de Final',
      'Quartas de Final',
      'Semifinal',*/
      'Final',
    ],
  },
  {
      id: "4",
      nome: "Copa Sul-Americana",
      logo: "https://upload.wikimedia.org/wikipedia/pt/e/e4/Conmebol_Sudamericana_logo.png",
      tipo: 'misto',
    fases: [
      /*'Fase de Grupos',
      'Oitavas de Final',
      'Quartas de Final',
      'Semifinal',*/
      'Final',
    ],
  },
  /*{
      id: "5",
      nome: "Liga dos Campeões",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Logo_UEFA_Champions_League.png",
      tipo: 'misto',
    fases: [
      '5ª Rodada',
      '6ª Rodada',
      '7ª Rodada',
      '8ª Rodada',
      'Oitavas de Final',
      'Quartas de Final',
      'Semifinal',
      'Final',
    ],
  }*/
]