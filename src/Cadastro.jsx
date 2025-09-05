import "./css/Cadastro.css";
import Logo from './assets/logo_greentech.png';
import "./css/App.css";

function Cadastro() {

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
                    <li><a href="servicos.html">Serviços</a></li>
                    <li><a href="contato.html">Contato</a></li>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="cadastro.html">Cadastro</a></li>
                  </ul>
                </nav>
              </div>
            </header>

      <main>
        <div id="formulario">
          <div className="titulo">
            <h1>Cadastre-se</h1>
            <p>Faça o seu cadastro aqui para obter uma resposta personalizada!</p>
          </div>

          <div className="forms">
            <label htmlFor="nome">Nome Completo</label>
            <input type="text" id="nome" />
            <span id="erro_nome"></span>

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />
            <span id="erro_email"></span>

            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" />
            <span id="erro_mensagem"></span>

            <input type="submit" id="enviar" value="ENVIAR" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Cadastro;
