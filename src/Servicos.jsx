import { Header } from './components/header';
import "./css/Servicos.css";

export function Servicos() {
  return (
    <>
      <Header />
      <main>
        <section className="form-container">
          <div className="description">
            <h2>Deixe-nos te ajudar!</h2>
            <p>Nos dê informações sobre o seu campo que a nossa IA irá te guiar</p>
          </div>

          <form className="form" id="service-form">
            <div className="form-group">
              <label htmlFor="hectares">Quantidade de hectares</label>
              <input type="number" id="hectares" name="hectares" required />
              <span className="error-message"></span>
            </div>

            <div className="form-group">
              <label htmlFor="localizacao">Onde está localizado</label>
              <select name="state" className="state" required></select>
              <span className="error-message"></span>
            </div>

            <div className="form-group">
              <label htmlFor="tipo-plantacao">Qual é o tipo de plantação</label>
              <input type="text" id="tipo-plantacao" name="tipo-plantacao" required />
              <span className="error-message"></span>
            </div>

            <div className="form-group">
              <label htmlFor="tamanho-fazenda">Qual é o tamanho da fazenda</label>
              <input type="text" id="tamanho-fazenda" name="tamanho-fazenda" required />
              <span className="error-message"></span>
            </div>

            <div className="form-group">
              <label htmlFor="data">Qual mês você deseja plantar?</label>
              <input type="date" name="data" id="data" required />
              <span className="error-message"></span>
            </div>

            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Servicos;