import "./sua_viagem_sem_complicacoes_quem_somos.css";
import ImagemViagemSemComplicacoesCasal from "../../../assets/imagem_turistas_sua_viagem_sem_complicacoes.jpg";

export default function SuaViagemSemComplicacoes() {
  return (
    <div className="sua_viagem_sem_complicacoes_quem_somos">
      <div className="limite_sua_viagem_sem_complicacoes_quem_somos">
        <div
          className="imagem_sua_viagem_sem_complicacoes_quem_somos"
          style={{
            backgroundImage: `url(${ImagemViagemSemComplicacoesCasal})`,
          }}
        ></div>
        <div className="texto_sua_viagem_sem_complicacoes_quem_somos">
          <h1>Sua viagem sem complicações</h1>
          <p>
            Nossos pacotes incluem tudo o que você precisa para uma experiência
            perfeita: passagens aéreas, hospedagem em hotéis selecionados,
            traslados, passeios turísticos e até opções gastronômicas.
          </p>
        </div>
      </div>
    </div>
  );
}
