import BotaoConverseComUmAgente from "../../botao_converse_com_um_agente/botao_converse_com_um_agente";
import "./tipos_de_servicos_cards_quem_somos.css";
import JanelaAviao from "../../../assets/imagem_janela_aviao_planos_internacionais_cards.webp";
import Mesquita from "../../../assets/imagem_mesquita_turismo_religioso_cards.webp";
import Motorista from "../../../assets/imagem_motorista_locadora_de_veiculos_cards.webp";
import QuartoHotel from "../../../assets/imagem_quarto_hotel_hotelaria_cards.webp";

export default function CardsTiposServicosQuemSomos() {
  return (
    <div className="background_tipos_de_servicos_cards_quem_somos">
      <div className="limit_cards_tipos_de_servicos_cards_quem_somos">
        <div className="cards_tipos_de_servicos_cards_quem_somos">
          <div className="quina_colorida_cards_tipos_de_servicos_cards_quem_somos"></div>
          <div className="texto_e_botoes_cards_tipos_de_servicos_cards_quem_somos">
            {/* Editável - Titulo */}

            <h1 className="titulo_texto_e_botoes_cards_tipos_de_servicos_cards_quem_somos">
              Turismo Religioso{" "}
            </h1>
            <div className="paragrafo_texto_e_botoes_cards_tipos_de_servicos_cards_quem_somos">
              {/* Editável - parágrafo */}
              <p>
                Turismo religioso é um segmento de mercado do turismo, o qual
                difere dos demais porque tem como motivação fundamental a fé
              </p>
            </div>
            <div className="div_botao_texto_e_botoes_cards_tipos_de_servicos_cards_quem_somos">
              <BotaoConverseComUmAgente />
            </div>
          </div>
          <img
            className="imagem_cards_tipos_de_servicos_cards_quem_somos"
            src={Mesquita}
            alt="Mesquita"
          />
        </div>
        <div className="cards_tipos_de_servicos_cards_quem_somos">
          <div className="quina_colorida_cards_tipos_de_servicos_cards_quem_somos"></div>
          <div className="texto_e_botoes_cards_tipos_de_servicos_cards_quem_somos">
            {/* Editável - Titulo */}

            <h1 className="titulo_texto_e_botoes_cards_tipos_de_servicos_cards_quem_somos">
              Alugar veículos{" "}
            </h1>
            <div className="paragrafo_texto_e_botoes_cards_tipos_de_servicos_cards_quem_somos">
              {/* Editável - parágrafo */}
              <p>
                100% brasileiro, não pague IOF, alugue online e pague somente a
                retirada. Faça tudo de forma simples, rápida e segura!
              </p>
            </div>
            <div className="div_botao_texto_e_botoes_cards_tipos_de_servicos_cards_quem_somos">
              <BotaoConverseComUmAgente />
            </div>
          </div>
          <img
            className="imagem_cards_tipos_de_servicos_cards_quem_somos"
            src={Motorista}
            alt="Motorista dirigindo carro"
          />
        </div>
        <div className="cards_tipos_de_servicos_cards_quem_somos">
          <div className="quina_colorida_cards_tipos_de_servicos_cards_quem_somos"></div>
          <div className="texto_e_botoes_cards_tipos_de_servicos_cards_quem_somos">
            {/* Editável - Titulo */}

            <h1 className="titulo_texto_e_botoes_cards_tipos_de_servicos_cards_quem_somos">
              Hotelaria{" "}
            </h1>
            <div className="paragrafo_texto_e_botoes_cards_tipos_de_servicos_cards_quem_somos">
              {/* Editável - parágrafo */}
              <p>
                Reserve hotéis ao melhor preço. Escolha o seu hotel preferido na
                Ipêturismo!
              </p>
            </div>
            <div className="div_botao_texto_e_botoes_cards_tipos_de_servicos_cards_quem_somos">
              <BotaoConverseComUmAgente />
            </div>
          </div>
          <img
            className="imagem_cards_tipos_de_servicos_cards_quem_somos"
            src={QuartoHotel}
            alt="Quarto de Hotel"
          />
        </div>
        <div className="cards_tipos_de_servicos_cards_quem_somos">
          <div className="quina_colorida_cards_tipos_de_servicos_cards_quem_somos"></div>
          <div className="texto_e_botoes_cards_tipos_de_servicos_cards_quem_somos">
            {/* Editável - Titulo */}

            <h1 className="titulo_texto_e_botoes_cards_tipos_de_servicos_cards_quem_somos">
              Planos Internacionais{" "}
            </h1>
            <div className="paragrafo_texto_e_botoes_cards_tipos_de_servicos_cards_quem_somos">
              {/* Editável - parágrafo */}
              <p>
                Encontre o Pacote Ideal para você e passagens aéreas com até 50%
                de Desconto.
              </p>
            </div>
            <div className="div_botao_texto_e_botoes_cards_tipos_de_servicos_cards_quem_somos">
              <BotaoConverseComUmAgente />
            </div>
          </div>
          <img
            className="imagem_cards_tipos_de_servicos_cards_quem_somos"
            src={JanelaAviao}
            alt="Janela de Avião"
          />
        </div>
      </div>
    </div>
  );
}
