// Função para converter "DD/MM/YYYY" e "HH:MM" em um objeto Date real
function criarDataCompleta(dataStr, horaStr) {
  if (!dataStr) return new Date(0); // Se faltar data, joga pro começo
  const [dia, mes, ano] = dataStr.split('/').map(Number);
  const [hora = 0, minuto = 0] = horaStr ? horaStr.split(':').map(Number) : [0, 0];
  return new Date(ano, mes - 1, dia, hora, minuto);
}

// Função principal que ordena os jogos por data e hora
export function ordenarJogosPorDataHora(jogos) {
  return [...jogos].sort((a, b) => {
    const dataA = criarDataCompleta(a.dataJogo, a.horaJogo);
    const dataB = criarDataCompleta(b.dataJogo, b.horaJogo);
    return dataA - dataB; // ordem crescente
  });
}