import Logo from './assets/logo_greentech.png';
import './css/App.css';
import "./css/Servicos.css";

function Servicos() {

  
  return (
    <>
      <header>
        <div className="cabecalho-container">
          <div className="logo">
            <a href="/">
              <img
                src={Logo}
                alt="Logo GreenTech"
                className="logo-imagem"
              />
              <span className="logo-texto">GreenTech</span>
            </a>
          </div>
          <nav className="main-menu">
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="/sobrenos">Sobre Nós</a></li>
              <li><a href="/servicos">Serviços</a></li>
              <li><a href="/contato">Contato</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/cadastro">Cadastro</a></li>
            </ul>
          </nav>
        </div>
      </header>

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