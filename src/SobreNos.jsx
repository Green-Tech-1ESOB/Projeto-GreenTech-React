import Logo from './assets/logo_greentech.png';
import Img5 from './assets/img5.jpg';
import Img4 from './assets/img4.jpg';
import Img3 from './assets/img3.jpg';
import './css/SobreNos.css';

function SobreNos() {

  return (
    <>
      <header>
              <div className="cabecalho-container">
                <div className="logo">
                  <a href="./assets/logo_greentech.png">
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
                    <li><a href="App.jsx">Início</a></li>
                    <li><a href="SobreNos.jsx">Sobre Nós</a></li>
                    <li><a href="servicos.html">Serviços</a></li>
                    <li><a href="contato.html">Contato</a></li>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="cadastro.html">Cadastro</a></li>
                  </ul>
                </nav>
              </div>
            </header>

            <main>
        <section id="sobre">
          <nav className="breadcrumb" aria-label="breadcrumb">
            <a href="App.jsx">Início</a>
            <span className="separator">›</span>
            <span className="current">Sobre Nós</span>
          </nav>

          <h2>Sobre Nós</h2>
          <div className="conteudo-secao">
            <div className="sobre-conteudo">
              <p>
                Na <strong>GreenTech</strong> acreditamos que o futuro do agronegócio é digital — e estamos aqui para liderar essa transformação. 
                Somos uma startup brasileira dedicada a conectar o campo<br/>
                à tecnologia de forma inteligente, prática e eficiente. Nossa missão é impulsionar a produtividade no campo por meio de soluções tecnológicas que simplificam a gestão agrícola e<br/>
                entregam resultados em tempo real. Atuamos lado a lado com produtores de todos os portes, oferecendo ferramentas inovadoras que combinam dados, automação e sustentabilidade.<br/>
                Com sensores inteligentes, monitoramento remoto e plataformas de gestão intuitivas, levamos o agronegócio a um novo nível de performance.<br/><br/>
                Mais do que tecnologia, entregamos resultados que fazem a diferença no dia a dia do produtor.<br/>
                Conectamos o agro ao futuro com inovação, compromisso e paixão.
              </p>
            </div>

            <div className="sobre-valores">
              <div className="valores-conteudo">
                <h3>Nossos Valores</h3>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                  <div className="card1" style={{ width: "18rem" }}>
                    <img src={Img5} className="card-img-top" alt="Sustentabilidade"/>
                    <div className="card-body">
                      <p className="card-text">
                        <strong>Sustentabilidade 🌱 </strong><br/>
                        Desenvolvemos soluções que respeitam o meio ambiente.
                      </p>
                    </div>
                  </div>

                  <div className="card1" style={{ width: "18rem" }}>
                    <img src={Img3} className="card-img-top" alt="Inovação"/>
                    <div className="card-body">
                      <p className="card-text">
                        <strong>Inovação 💡 </strong><br/>
                        Software personalizado, que se adapta a necessidade de<br/>
                        cada produtor.
                      </p>
                    </div>
                  </div>

                  <div className="card1" style={{ width: "18rem" }}>
                    <img src={Img4} className="card-img-top" alt="Parceria"/>
                    <div className="card-body">
                      <p className="card-text">
                        <strong>Parceria 🤝 </strong><br/>
                        Apoiamos pequenos e médios agricultores que sofrem<br/>
                        com questões climáticas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 GreenTech. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default SobreNos;