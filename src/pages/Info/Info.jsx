import "./Info.css";
import { Link } from "react-router-dom";
import { X } from "@phosphor-icons/react";

export default function Info() {
  return (
    <div className="infoContainer">
      <Link to={"/"} className="infoCloseBtn">
        <X size={27} />
      </Link>
      <div className="infoContent">
        <div className="infoContentOne">
          <p>
            <span>1.</span> Em cada rodada, um card representando um perfil
            secreto é selecionada aleatoriamente. Os jogadores, em sua vez,
            recebem pistas sobre o perfil secreto. Essas dicas podem revelar
            características ou informações relacionadas ao perfil em questão.
          </p>

          <p>
            <span>2.</span> O objetivo é identificar o perfil secreto usando o
            menor número possível de dicas. Quanto menos dicas você precisar
            para acertar, mais pontos você ganhará.
          </p>

          <p>
            <span>3.</span> Os jogadores decidem entre si quem será o primeiro
            mediador. A escolha pode ser feita por sorteio, votação ou qualquer
            outro método acordado.
          </p>

          <p>
            <span>4.</span> O jogador sentado à esquerda do mediador escolhe um
            número de 1 a 15 e o mediador lê em voz alta a dica correspondente
            ao número escolhido pelo jogador.
          </p>

          <p>
            <span>5.</span> Após a leitura da dica, o jogador que a escolheu tem
            a oportunidade de adivinhar a identidade do card, dizendo quem ou o
            que ele acredita estar representado nele. Se o jogador preferir não
            dar um palpite, ele pode passar a vez para o jogador à sua esquerda.
          </p>

          <p>
            <span>6.</span> Após ler a dica, o mediador pode clicar sobre ela
            para descartá-la. Isso ajuda a prevenir confusões na contagem de
            pontos e assegura que todos os participantes saibam que a dica já
            foi utilizada.
          </p>

          <p>
            <span>7.</span> Se o jogador acertar, uma nova carta é sorteada e o
            jogador à esquerda se torna o novo mediador. Se o jogador errar, a
            vez passa para o próximo jogador à esquerda, que seguirá o mesmo
            processo.
          </p>

          <p>
            <span>8.</span> Cada card vale 15 pontos. Esses pontos são divididos
            entre o mediador e o jogador que acertar o palpite. O mediador
            recebe um ponto para cada dica revelada. O jogador que acertar
            recebe pontos equivalentes ao número de dicas não reveladas.
          </p>
        </div>

        <div className="infoContentTwo">
          <p>Os <span>1300 cards</span> estão distribuídos e podem pertencer às seguintes categorias:</p>

          <p className="infoThemeOne">
            <span>Pessoa</span>
            inclui qualquer ser humano, vivo ou morto, bem como profissões.
          </p>

          <p className="infoThemeTwo">
            <span>Lugar</span>
            abrange cidades, estados, países, qualquer formação natural, construção humana ou lugares
            fictícios.
          </p>

          <p className="infoThemeThree">
            <span>Coisa</span>é bastante ampla e pode incluir animais, objetos
            inanimados, substantivos, conceitos abstratos e qualquer outro
            perfil que não se encaixe nas categorias anteriores.
          </p>

          <p className="infoThemeFour">
            <span>Filme e TV</span>
            engloba filmes, séries, programas de televisão e personagens destes.
          </p>
        </div>

        <div className="infoSpecialCards">
          <p>Cards Especiais</p>

          <p>
            Durante o sorteio de cartas, o jogador pode ocasionalmente receber
            uma carta especial em vez de uma carta normal. As cartas especiais
            são:
          </p>

          <p>
            <span>Dedos apontados</span>
            Escolha um jogador. Este jogador, por sua vez, deve indicar outro
            jogador para sofrer uma perda de 15 pontos de sua pontuação total ou
            voltar 15 casas. Em seguida, gere uma nova carta e continue a
            rodada.
          </p>

          <p>
            <span>Azar do destino</span>
            Escolha um jogador para ser vítima do infortúnio. Este jogador terá
            que subtrair 15 pontos de sua pontuação total ou voltar 15 casas. Em
            seguida, gere uma nova carta e continue a rodada.
          </p>

          <p>
            <span>Pausa para reflexão</span>
            Escolha um jogador para fazer uma pausa, excluindo-o da rodada
            atual. Em seguida, gere uma nova carta e continue a rodada.
          </p>

          <p>
            <span>Tempo de espera</span>
            Escolha um jogador para fazer uma pausa e refletir, impedindo-o de
            dar palpites ou tomar ações durante três de suas próximas
            oportunidades de jogar, independentemente de novas rodadas terem
            sido iniciadas. Em seguida, gere uma nova carta e continue a rodada.
          </p>
        </div>

        <p className="infoContentThree">
          Por favor, note que essa plataforma é responsável apenas por gerar as
          cartas de perfil. A contagem de pontos é uma parte essencial do jogo,
          mas é deixada inteiramente a critério dos jogadores. Você pode optar
          por usar um tabuleiro de jogo, um placar, ou qualquer outro método que
          considere adequado para acompanhar os pontos. Recomendamos que os
          jogadores estabeleçam um sistema de pontuação antes de começar o jogo
          para garantir uma experiência de jogo justa e divertida para todos.
          Aproveite o jogo!
        </p>
      </div>
    </div>
  );
}
