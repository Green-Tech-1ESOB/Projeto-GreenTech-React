
import { useNavigate } from 'react-router-dom';
import { Header } from './components/header';
import './css/App.css';
import { Subtitle, Title, Paragraph } from './components/TextComponents';
import Footer from './components/Footer';
import Link from './components/Link';

function Home() {
    const navigator = useNavigate()

    return (
        <>
            <Header />
            <main>
                <section id="banner">
                    <div className="banner-conteudo">
                        <Title>Bem-vindo à GreenTech</Title>
                        <Paragraph>Inovação e tecnologia para transformar o agronegócio brasileiro</Paragraph>
                        <div className="banner-chamada-acao">
                            <Link onClick={() => navigator('/servicos')} className="botao-primario">
                                Conheça nossas soluções
                            </Link>
                        </div>
                    </div>
                </section>

                <section id="sobre">
                    <Subtitle>Problema/Solução</Subtitle>
                    <div className="conteudo-secao">
                        <div className="sobre-conteudo">
                            <Paragraph>
                                Pequenos agricultores enfrentam diariamente desafios que
                                comprometem sua produtividade e sustentabilidade. A falta de
                                acesso a informações em tempo real sobre o clima, solo e pragas,
                                somada à dificuldade de comercializar seus produtos diretamente
                                ao consumidor, limita seu crescimento e reduz sua renda. Além
                                disso, o uso ineficiente de recursos como água e fertilizantes
                                gera desperdício e impactos ambientais.
                            </Paragraph>
                            <br />
                            <Paragraph>
                                Pensando nisso, desenvolvemos uma solução acessível e intuitiva,
                                feita especialmente para o pequeno produtor rural. Através de
                                uma plataforma digital simples e eficiente, o agricultor pode:
                                <br />
                                Monitorar condições climáticas e do solo em tempo real.
                                <br />
                                Receber alertas sobre pragas e recomendações de manejo.
                                <br />
                                Gerenciar sua produção e estoque com poucos cliques.
                                <br />
                                Vender diretamente para consumidores e mercados locais, sem
                                intermediários.
                                <br />
                                Nosso objetivo é empoderar o pequeno agricultor com tecnologia
                                que cabe no bolso e faz diferença no campo. Porque acreditamos
                                que o futuro do agro começa com quem planta com dedicação todos
                                os dias.
                            </Paragraph>
                        </div>
                        <div className="sobre-valores">
                            <h3>Nossos Valores</h3>
                            <div className="valor-item">
                                <span className="valor-icone">🌱</span>
                                <div className="valor-texto">
                                    <h4>Sustentabilidade</h4>
                                    <Paragraph>
                                        Desenvolvemos soluções que respeitam o meio ambiente e
                                        promovem práticas agrícolas sustentáveis.
                                    </Paragraph>
                                </div>
                            </div>
                            <div className="valor-item">
                                <span className="valor-icone">💡</span>
                                <div className="valor-texto">
                                    <h4>Inovação</h4>
                                    <Paragraph>
                                        Buscamos constantemente novas tecnologias e métodos para
                                        revolucionar o agronegócio.
                                    </Paragraph>
                                </div>
                            </div>
                            <div className="valor-item">
                                <span className="valor-icone">🤝</span>
                                <div className="valor-texto">
                                    <h4>Parceria</h4>
                                    <Paragraph>
                                        Trabalhamos lado a lado com produtores rurais, entendendo
                                        suas necessidades reais.
                                    </Paragraph>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="servicos">
                    <Subtitle>Nossos Serviços</Subtitle>
                    <div className="servicos-grade">
                        <div className="servico-cartao">
                            <div className="servico-icone">🛰️</div>
                            <h3>Monitoramento por Satélite</h3>
                            <Paragraph>
                                Acompanhamento em tempo real da saúde das plantações,
                                identificação precoce de pragas e doenças, e análise de
                                produtividade por área.
                            </Paragraph>
                        </div>
                        <div className="servico-cartao">
                            <div className="servico-icone">💧</div>
                            <h3>Irrigação Inteligente</h3>
                            <Paragraph>
                                Sistemas automatizados que otimizam o uso da água, reduzindo
                                desperdícios e garantindo a quantidade ideal para cada tipo de
                                cultura.
                            </Paragraph>
                        </div>
                        <div className="servico-cartao">
                            <div className="servico-icone">📊</div>
                            <h3>Análise de Dados</h3>
                            <Paragraph>
                                Processamento avançado de informações para tomada de decisões
                                estratégicas, previsão de safras e otimização de recursos.
                            </Paragraph>
                        </div>
                        <div className="servico-cartao">
                            <div className="servico-icone">🤖</div>
                            <h3>Automação Rural</h3>
                            <Paragraph>
                                Implementação de sistemas automatizados para controle de
                                maquinário, alimentação animal e monitoramento de condições
                                ambientais.
                            </Paragraph>
                        </div>
                    </div>
                    <div className="botao2">
                        <Link
                            href="https://youtu.be/dDlZ1CP9PAk?si=2MGB8tjtEXtFAG7T"
                            target="_blank"
                            rel="noreferrer"
                            className="botao-primario"
                        >
                            Assista ao nosso Pitch
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Home;
