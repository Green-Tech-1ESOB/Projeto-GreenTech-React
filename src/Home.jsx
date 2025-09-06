
import { useNavigate } from 'react-router-dom';
import { Header } from './components/header';
import './css/App.css';

function Home() {
    const navigator = useNavigate()

    return (
        <>
            <Header />
            <main>
                <section id="banner">
                    <div className="banner-conteudo">
                        <h1>Bem-vindo à GreenTech</h1>
                        <p>Inovação e tecnologia para transformar o agronegócio brasileiro</p>
                        <div className="banner-chamada-acao">
                            <a onClick={() => navigator('/servicos')} className="botao-primario">
                                Conheça nossas soluções
                            </a>
                        </div>
                    </div>
                </section>

                <section id="sobre">
                    <h2>Problema/Solução</h2>
                    <div className="conteudo-secao">
                        <div className="sobre-conteudo">
                            <p>
                                Pequenos agricultores enfrentam diariamente desafios que
                                comprometem sua produtividade e sustentabilidade. A falta de
                                acesso a informações em tempo real sobre o clima, solo e pragas,
                                somada à dificuldade de comercializar seus produtos diretamente
                                ao consumidor, limita seu crescimento e reduz sua renda. Além
                                disso, o uso ineficiente de recursos como água e fertilizantes
                                gera desperdício e impactos ambientais.
                            </p>
                            <br />
                            <p>
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
                            </p>
                        </div>
                        <div className="sobre-valores">
                            <h3>Nossos Valores</h3>
                            <div className="valor-item">
                                <span className="valor-icone">🌱</span>
                                <div className="valor-texto">
                                    <h4>Sustentabilidade</h4>
                                    <p>
                                        Desenvolvemos soluções que respeitam o meio ambiente e
                                        promovem práticas agrícolas sustentáveis.
                                    </p>
                                </div>
                            </div>
                            <div className="valor-item">
                                <span className="valor-icone">💡</span>
                                <div className="valor-texto">
                                    <h4>Inovação</h4>
                                    <p>
                                        Buscamos constantemente novas tecnologias e métodos para
                                        revolucionar o agronegócio.
                                    </p>
                                </div>
                            </div>
                            <div className="valor-item">
                                <span className="valor-icone">🤝</span>
                                <div className="valor-texto">
                                    <h4>Parceria</h4>
                                    <p>
                                        Trabalhamos lado a lado com produtores rurais, entendendo
                                        suas necessidades reais.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="servicos">
                    <h2>Nossos Serviços</h2>
                    <div className="servicos-grade">
                        <div className="servico-cartao">
                            <div className="servico-icone">🛰️</div>
                            <h3>Monitoramento por Satélite</h3>
                            <p>
                                Acompanhamento em tempo real da saúde das plantações,
                                identificação precoce de pragas e doenças, e análise de
                                produtividade por área.
                            </p>
                        </div>
                        <div className="servico-cartao">
                            <div className="servico-icone">💧</div>
                            <h3>Irrigação Inteligente</h3>
                            <p>
                                Sistemas automatizados que otimizam o uso da água, reduzindo
                                desperdícios e garantindo a quantidade ideal para cada tipo de
                                cultura.
                            </p>
                        </div>
                        <div className="servico-cartao">
                            <div className="servico-icone">📊</div>
                            <h3>Análise de Dados</h3>
                            <p>
                                Processamento avançado de informações para tomada de decisões
                                estratégicas, previsão de safras e otimização de recursos.
                            </p>
                        </div>
                        <div className="servico-cartao">
                            <div className="servico-icone">🤖</div>
                            <h3>Automação Rural</h3>
                            <p>
                                Implementação de sistemas automatizados para controle de
                                maquinário, alimentação animal e monitoramento de condições
                                ambientais.
                            </p>
                        </div>
                    </div>
                    <div className="botao2">
                        <a
                            href="https://youtu.be/dDlZ1CP9PAk?si=2MGB8tjtEXtFAG7T"
                            target="_blank"
                            rel="noreferrer"
                            className="botao-primario"
                        >
                            Assista ao nosso Pitch
                        </a>
                    </div>
                </section>
            </main>

            <footer>
                <p>&copy; 2025 GreenTech. Todos os direitos reservados.</p>
            </footer>
        </>
    )
}

export default Home;
