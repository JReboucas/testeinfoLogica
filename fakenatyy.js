
function obterDadosEntrada() {
    // Simulação de dados. 
    return {
      corridas: [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        [2, 1, 4, 3, 5, 6, 7, 8, 9, 10],
      ],
      sistemasPontuacao: [
        [25, 18, 15, 12, 10, 8, 6, 4, 2, 1],
      ]
    };
  }
  
  // Função para calcular os pontos dos pilotos
  function calcularPontos(corridas, sistemaPontuacao) {
    let pontosPilotos = new Array(corridas[0].length).fill(0);
  
    for (let corrida of corridas) {
      for (let i = 0; i < sistemaPontuacao.length; i++) {
        let posicao = corrida.indexOf(i + 1);
        if (posicao < sistemaPontuacao.length) {
          pontosPilotos[i] += sistemaPontuacao[posicao];
        }
      }
    }
  
    return pontosPilotos;
  }
  
  // Função para determinar o campeão
  function determinarCampeao(pontosPilotos) {
    let maxPontos = Math.max(...pontosPilotos);
    let campeoes = [];
  
    for (let i = 0; i < pontosPilotos.length; i++) {
      if (pontosPilotos[i] === maxPontos) {
        campeoes.push(i + 1);
      }
    }
  
    return campeoes;
  }
  
  // Processamento dos dados de entrada
  const dadosEntrada = obterDadosEntrada();
  const { corridas, sistemasPontuacao } = dadosEntrada;
  
  sistemasPontuacao.forEach(sistemaPontuacao => {
    let pontos = calcularPontos(corridas, sistemaPontuacao);
    let campeoes = determinarCampeao(pontos);
    console.log("Campeão(ões) com o sistema de pontuação", sistemaPontuacao, ":", campeoes.join(" "));
  });
  