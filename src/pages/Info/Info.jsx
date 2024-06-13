import "./Info.css";
import { Link } from "react-router-dom";
import { WarningCircle, X } from "@phosphor-icons/react";
import logobw from "../../assets/logobw.svg";

export default function Info() {
  return (
    <div className="infoContainer">
      <Link to={"/"} className="infoCloseBtn">
        <X size={27} />
      </Link>
      <div className="infoContent">
        <div className="infoContentOne">
          <p>
            <span>1.</span> Em cada rodada, uma carta representando um perfil
            secreto é selecionada aleatoriamente.
          </p>

          <p>
            <span>2.</span> Os jogadores, em sua vez, recebem pistas sobre o
            perfil secreto. Essas dicas podem revelar características ou
            informações relacionadas ao perfil em questão.
          </p>

          <p>
            <span>3.</span> O objetivo é identificar o perfil secreto usando o
            menor número possível de dicas. Quanto menos dicas você precisar
            para acertar, mais pontos você ganhará.
          </p>
        </div>

        <div className="infoContentTwo">
          <p>Os perfis podem pertencer a uma das seguintes categorias:</p>

          <p className="infoThemeOne">
            <span>Pessoa</span>
            inclui qualquer ser humano, vivo ou morto, bem como diversas
            profissões.
          </p>

          <p className="infoThemeTwo">
            <span>Lugar</span>
            abrange qualquer formação natural, construção humana ou lugares
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

        <p className="infoContentThree">
          <WarningCircle size={20} />
          Por favor, note que essa plataforma é responsável apenas por gerar as
          cartas de perfil. A contagem de pontos é uma parte essencial do jogo,
          mas é deixada inteiramente a critério dos jogadores. Você pode optar
          por usar um tabuleiro de jogo, um placar, ou qualquer outro método que
          considere adequado para acompanhar os pontos. Recomendamos que os
          jogadores estabeleçam um sistema de pontuação antes de começar o jogo
          para garantir uma experiência de jogo justa e divertida para todos.
          Aproveite o jogo!
        </p>

        <img src={logobw} alt="" />
      </div>
    </div>
  );
}
