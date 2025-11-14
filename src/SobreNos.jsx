import Img5 from './assets/img5.jpg';
import Img4 from './assets/img4.jpg';
import Img3 from './assets/img3.jpg';
import styles from './css/SobreNos.module.css'; 
import { Header } from './components/header';
import { Paragraph } from './components/TextComponents';
import Span from './components/Span';
import Footer from './components/Footer';

function SobreNos() {

  return (
    <>
      <Header />
      <main>
        <section className={styles.section}>
          <nav className={styles.breadcrumb} aria-label="breadcrumb">
            <a href="App.jsx">Início</a>
            <Span className={styles.separator}>›</Span>
            <Span className={styles.current}>Sobre Nós</Span>
          </nav>

          <h2>Sobre Nós</h2>
          <div className={styles.conteudoSecao}>
            <div className={styles.sobreConteudo}>
              <Paragraph>
                Na <strong>GreenTech</strong> acreditamos que o futuro do agronegócio é digital — e estamos aqui para liderar essa transformação.
                Somos uma startup brasileira dedicada a conectar o campo<br />
                à tecnologia de forma inteligente, prática e eficiente. Nossa missão é impulsionar a produtividade no campo por meio de soluções tecnológicas que simplificam a gestão agrícola e<br />
                entregam resultados em tempo real. Atuamos lado a lado com produtores de todos os portes, oferecendo ferramentas inovadoras que combinam dados, automação e sustentabilidade.<br />
                Com sensores inteligentes, monitoramento por drones e plataformas de análise de dados, a GreenTech está definindo um novo padrão de eficiência e responsabilidade ambiental no setor.<br />
                Nossa equipe é composta por agrônomos, engenheiros de software e especialistas em IA, todos unidos pelo compromisso de levar o melhor da tecnologia ao produtor rural.
              </Paragraph>
              <br />
              <Paragraph>
                Junte-se a nós e descubra como a tecnologia pode cultivar um futuro mais verde e próspero para todos.
              </Paragraph>
            </div>
            
            <div className={styles.valoresConteudo}>
              <h3>Nossos Valores</h3>
              <div>
                {/* Cartão 1 */}
                <div className={styles.card1}>
                  <img src={Img5} className={styles.cardImgTop} alt="Sustentabilidade" />
                  <div className={styles.cardBody}>
                    <Paragraph className={styles.cardText}>
                      <strong>Sustentabilidade 🌱 </strong><br />
                      Desenvolvemos soluções que respeitam o meio ambiente.
                    </Paragraph>
                  </div>
                </div>

                {/* Cartão 2 */}
                <div className={styles.card1}>
                  <img src={Img3} className={styles.cardImgTop} alt="Inovação" />
                  <div className={styles.cardBody}>
                    <Paragraph className={styles.cardText}>
                      <strong>Inovação 💡 </strong><br />
                      Software personalizado, que se adapta a necessidade de<br />
                      cada produtor.
                    </Paragraph>
                  </div>
                </div>

                {/* Cartão 3 */}
                <div className={styles.card1}>
                  <img src={Img4} className={styles.cardImgTop} alt="Parceria" />
                  <div className={styles.cardBody}>
                    <Paragraph className={styles.cardText}>
                      <strong>Parceria 🤝 </strong><br />
                      Apoiamos pequenos e médios agricultores que sofrem<br />
                      com questões climáticas.
                    </Paragraph>
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