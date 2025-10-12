import { useState } from 'react';
import "./css/Contato.css";
import { Header } from './components/header';
import Input from './components/input';
import { Title, Paragraph } from './components/TextComponents';
import Span from './components/Span';
import Button from './components/Button';

function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [titulo, setTitulo] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [erroNome, setErroNome] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroMensagem, setErroMensagem] = useState('');
  const [, setFormEnviado] = useState(false);

  const validarEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleBlur = () => {
    // Valida o nome completo
    const palavras = nome.trim().split(/\s+/);
    if (palavras.length < 2) {
      setErroNome("Digite seu nome completo!");
    } else {
      setErroNome('');
    }

    // Valida o email
    if (!validarEmail(email)) {
      setErroEmail("Digite um e-mail válido!");
    } else {
      setErroEmail('');
    }

    // Valida a mensagem
    if (mensagem.trim().length < 30) {
      setErroMensagem("Você deve escrever pelo menos 30 caracteres!");
    } else {
      setErroMensagem('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Re-valida todos os campos antes de enviar
    handleBlur();

    if (nome === "" || email === "" || titulo === "" || mensagem === "") {
      alert("Preencha todas as informações!");
    } else if (erroNome || erroEmail || erroMensagem) {
      alert("Corrija os erros do formulário antes de enviar!");
    } else {
      alert("Enviado com sucesso!");
      setFormEnviado(true);

      // Limpa os campos após o envio bem-sucedido
      setNome('');
      setEmail('');
      setTitulo('');
      setMensagem('');
      setErroNome('');
      setErroEmail('');
      setErroMensagem('');
    }
  };

  return (
    <>
      <Header />

      <main>
        <div id="formulario">
          <div className="titulo">
            <Title>Fale conosco!</Title>
            <Paragraph>Estamos à disposição para responder suas dúvidas.</Paragraph>
          </div>

          <form className="forms" onSubmit={handleSubmit}>
            <Input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              onBlur={handleBlur}
              label="Nome Completo"
            />
            <Span id="erro_nome">{erroNome}</Span>

            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleBlur}
              label="E-mail"
            />
            <Span id="erro_email">{erroEmail}</Span>

            <Input
              type="text"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              label="Título"
            />

            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              rows="5"
              cols="30"
              maxLength="500"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              onBlur={handleBlur}
            ></textarea>
            <Span id="erro_mensagem">{erroMensagem}</Span>

            <Button type="submit" id="enviar">ENVIAR</Button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Contato;