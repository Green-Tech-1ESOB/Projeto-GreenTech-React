import Img5 from './assets/img5.jpg';
import Img4 from './assets/img4.jpg';
import Img3 from './assets/img3.jpg';
import './css/SobreNos.css';
import { Header } from './components/header';
import { Paragraph } from './components/TextComponents';
import Span from './components/Span';
import Footer from './components/Footer';

function SobreNos() {

  return (
    <>
      <Header />
      <main>
        <section id="sobre">
          <nav className="breadcrumb" aria-label="breadcrumb">
            <a href="App.jsx">Início</a>
            <Span className="separator">›</Span>
            <Span className="current">Sobre Nós</Span>
          </nav>

          <h2>Sobre Nós</h2>
          <div className="conteudo-secao">
            <div className="sobre-conteudo">
              <Paragraph>
                Na <strong>GreenTech</strong> acreditamos que o futuro do agronegócio é digital — e estamos aqui para liderar essa transformação.
                Somos uma startup brasileira dedicada a conectar o campo<br />
                à tecnologia de forma inteligente, prática e eficiente. Nossa missão é impulsionar a produtividade no campo por meio de soluções tecnológicas que simplificam a gestão agrícola e<br />
                entregam resultados em tempo real. Atuamos lado a lado com produtores de todos os portes, oferecendo ferramentas inovadoras que combinam dados, automação e sustentabilidade.<br />
                Com sensores inteligentes, monitoramento remoto e plataformas de gestão intuitivas, levamos o agronegócio a um novo nível de performance.<br /><br />
                Mais do que tecnologia, entregamos resultados que fazem a diferença no dia a dia do produtor.<br />
                Conectamos o agro ao futuro com inovação, compromisso e paixão.
              </Paragraph>
            </div>

            <div className="sobre-valores">
              <div className="valores-conteudo">
                <h3>Nossos Valores</h3>
                <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                  <div className="card1" style={{ width: "18rem" }}>
                    <img src={Img5} className="card-img-top" alt="Sustentabilidade" />
                    <div className="card-body">
                      <Paragraph className="card-text">
                        <strong>Sustentabilidade 🌱 </strong><br />
                        Desenvolvemos soluções que respeitam o meio ambiente.
                      </Paragraph>
                    </div>
                  </div>

                  <div className="card1" style={{ width: "18rem" }}>
                    <img src={Img3} className="card-img-top" alt="Inovação" />
                    <div className="card-body">
                      <Paragraph className="card-text">
                        <strong>Inovação 💡 </strong><br />
                        Software personalizado, que se adapta a necessidade de<br />
                        cada produtor.
                      </Paragraph>
                    </div>
                  </div>

                  <div className="card1" style={{ width: "18rem" }}>
                    <img src={Img4} className="card-img-top" alt="Parceria" />
                    <div className="card-body">
                      <Paragraph className="card-text">
                        <strong>Parceria 🤝 </strong><br />
                        Apoiamos pequenos e médios agricultores que sofrem<br />
                        com questões climáticas.
                      </Paragraph>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default SobreNos;