import styles from "./css/Login.module.css";
import Fundo from './assets/img1.jpeg'

import Input from './components/input';
import { Subtitle } from "./components/TextComponents";
import Span from "./components/Span";
import Button from "./components/Button";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.container_imagem}>
        <img
          className={styles.imagem}
          src={Fundo}
          alt="Imagem de uma fazenda"
        />
      </div>

      <div className={styles.container_forms}>
        <Subtitle>Login</Subtitle>

        <div className={styles.forms}>
          <Input type="email" id="email" label="Email" />
          <Input type="number" id="senha" label="Senha" />

          <Button>Entrar</Button>

          <Span>
            Ainda não tem Login? <a href="#">Cadastre-se</a>
          </Span>
        </div>
      </div>
    </div>
  );
}

export default Login;