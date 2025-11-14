import Button from './components/Button';
import { Header } from './components/header';
import Input from './components/input';
import Span from './components/Span';
import { Paragraph, Subtitle } from './components/TextComponents';
import styles from "./css/Servicos.module.css";

export function Servicos() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.form_container}>
          <div className={styles.description}>
            <Subtitle>Deixe-nos te ajudar!</Subtitle>
            <Paragraph>Nos dê informações sobre o seu campo que a nossa IA irá te guiar</Paragraph>
          </div>

          <form className={styles.form} id="service-form">
            <div className={styles.form_group}>
              <Input type="number" id="hectares" name="hectares" required label="Quantidade de hectares" />
              <Span className="error-message"></Span>
            </div>

            <div className={styles.form_group}>
              <label htmlFor="localizacao">Onde está localizado</label>
              <select name="state" className="state" required></select>
              <Span className="error-message"></Span>
            </div>

            <div className={styles.form_group}>
              <label htmlFor="tipo-plantacao"></label>
              <Input type="text" id="tipo-plantacao" name="tipo-plantacao" required label="Qual é o tipo de plantação" />
              <Span className="error-message"></Span>
            </div>

            <div className={styles.form_group}>
              <Input type="text" id="tamanho-fazenda" name="tamanho-fazenda" required label="Qual é o tamanho da fazenda" />
              <Span className="error-message"></Span>
            </div>

            <div className={styles.form_group}>
              <Input type="date" name="data" id="data" label="Qual mês você deseja plantar?" />
              <Span className="error-message"></Span>
            </div>

            <Button type="submit">Enviar</Button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Servicos;