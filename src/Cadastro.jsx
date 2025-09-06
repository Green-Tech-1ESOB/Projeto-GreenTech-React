import "./css/Cadastro.css";
import Logo from './assets/logo_greentech.png';
import "./css/App.css";
import { Header } from "./components/header";

export function Cadastro() {

  return (
    <>
      <Header />

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
