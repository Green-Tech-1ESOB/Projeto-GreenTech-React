import "./css/Cadastro.css";
import Logo from './assets/logo_greentech.png';
import "./css/App.css";
import { Header } from "./components/header";
import Input from "./components/input";
import { Title, Paragraph } from "./components/TextComponents";

import Span from './components/Span'

export function Cadastro() {

  return (
    <>
      <Header />

      <main>
        <div id="formulario">
          <div className="titulo">
            <Title>Cadastre-se</Title>
            <Paragraph>Faça o seu cadastro aqui para obter uma resposta personalizada!</Paragraph>
          </div>

          <div className="forms">
            <Input type="text" id="nome" label="Nome Completo" />
            <Span id="erro_nome"></Span>

            <Input type="email" id="email" label="E-mail" />
            <Span id="erro_email"></Span>

            <Input type="password" id="senha" label="Senha" />
            <Span id="erro_mensagem"></Span>

            <Input type="submit" id="enviar" value="ENVIAR" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Cadastro;
