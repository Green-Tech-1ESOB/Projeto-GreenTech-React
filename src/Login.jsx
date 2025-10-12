import "./css/Login.css";
import Fundo from './assets/img1.jpeg'

import Input from './components/input';
import { Subtitle } from "./components/TextComponents";
import Span from "./components/Span";
import Button from "./components/Button";

function Login() {
  return (
    <div className="container">
      <div className="container_imagem">
        <img
          className="imagem"
          src={Fundo}
          alt="Imagem de uma fazenda"
        />
      </div>

      <div className="container_forms">
        <Subtitle>Login</Subtitle>

        <div className="forms">
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
