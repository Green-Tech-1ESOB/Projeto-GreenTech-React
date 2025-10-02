import Imagem1 from "../assets/img3.jpg";
import Imagem2 from "../assets/img4.jpg";
import Imagem3 from "../assets/img5.jpg";
import './colunas.css';

export const Colunas = () => {

    return(
        <main className="board">
      {/* Preparação */}
      <div className="column">
        <h3>Preparação</h3>
        <hr />
        <img src={Imagem1} alt="Imagem" />

        <div className="linhas">
          <div>
            <input type="checkbox" id="prep1" />
            <label htmlFor="prep1">Limpar o solo</label>
          </div>

          <div>
            <input type="checkbox" id="prep2" />
            <label htmlFor="prep2">Adubar o solo</label>
          </div>

          <div>
            <input type="checkbox" id="prep3" />
            <label htmlFor="prep3">Definir espaçamento dos canteiros</label>
          </div>
        </div>
      </div>

      {/* Plantio */}
      <div className="column">
        <h3>Plantio</h3>
        <hr />
        <img src={Imagem2} alt="" />

        <div className="linhas">

          <div>
            <input type="checkbox" id="plantio1" />
            <label htmlFor="plantio1">Semeadura</label>
          </div>

          <div>
            <input type="checkbox" id="plantio2" />
            <label htmlFor="plantio2">Primeiras regas leves e frequentes</label>
          </div>
           
        </div>

      </div>

      {/* Crescimento Inicial */}
      <div className="column">
        <h3>Crescimento Inicial</h3>
        <hr />
        <img src={Imagem1} alt="" />

        <div className="linhas">

          <div>
            <input type="checkbox" id="cres1" />
            <label htmlFor="cres1">Manter o solo úmido</label>
          </div>

          <div>
            <input type="checkbox" id="cres2" />
            <label htmlFor="cres2">Retirar ervas daninhas</label>
          </div>

          <div>
            <input type="checkbox" id="cres3" />
            <label htmlFor="cres3">Proteção a pragas</label>
          </div>

        </div>

      </div>

      {/* Desenvolvimento */}
      <div className="column">
        <h3>Desenvolvimento</h3>
        <hr />
        <img src={Imagem3} alt="" />

        <div className="linhas">

          <div>
            <input type="checkbox" id="des1" />
            <label htmlFor="des1">Transplantar mudas para os canteiros</label>
          </div>

          <div>
            <input type="checkbox" id="des2" />
            <label htmlFor="des2">Tutoramento</label>
          </div>

          <div>
            <input type="checkbox" id="des3" />
            <label htmlFor="des3">Adubação leve</label>
          </div>

        </div>

      </div>

      {/* Crescimento Vegetativo */}
      <div className="column">
        <h3>Crescimento Vegetativo</h3>
        <hr />
        <img src={Imagem1} alt="" />

        <div className="linhas">

          <div>
            <input type="checkbox" id="veg1" />
            <label htmlFor="veg1">Rega constante</label>
          </div>

          <div>
            <input type="checkbox" id="veg2" />
            <label htmlFor="veg2">Controle de ervas daninhas</label>
          </div>

          <div>
            <input type="checkbox" id="veg3" />
            <label htmlFor="veg3">Podas leves</label>
          </div>

        </div>

      </div>

      {/* Floração */}
      <div className="column">
        <h3>Floração</h3>
        <hr />
        <img src={Imagem1} alt="" />

        <div className="linhas">

          <div>
            <input type="checkbox" id="flo1" />
            <label htmlFor="flo1">Irrigação constante</label>
          </div>
          
        </div>

      </div>

      {/* Pré-colheita */}
      <div className="column">
        <h3>Pré-colheita</h3>
        <hr />
        <img src={Imagem1} alt="" />

        <div className="linhas">

          <div>
            <input type="checkbox" id="precol1" />
            <label htmlFor="precol1">Reduzir irrigação</label>
          </div>

        </div>

      </div>

      {/* Colheita */}
      <div className="column">
        <h3>Colheita</h3>
        <hr />
        <img src={Imagem1} alt="" />

        <div className="linhas">

          <div>
            <input type="checkbox" id="colh1" />
           <label htmlFor="colh1">Realizar a colheita</label>
          </div>

        </div>

      </div>

      {/* Pós-colheita */}
      <div className="column">
        <h3>Pós-colheita</h3>
        <hr />
        <img src={Imagem1} alt="" />

        <div className="linhas">

          <div>
            <input type="checkbox" id="pos1" />
            <label htmlFor="pos1">Compostar restos de plantas</label>
          </div>

          <div>
            <input type="checkbox" id="pos2" />
            <label htmlFor="pos2">Fazer rotação de culturas</label>
          </div>

          <div>
            <input type="checkbox" id="pos3" />
            <label htmlFor="pos3">Preparar o solo para o novo ciclo</label>
          </div>

        </div>

      </div>

    </main>
    )
}