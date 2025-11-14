import { useState } from 'react';
import { Header } from './components/header';
import Input from './components/input';
import { Title, Paragraph } from './components/TextComponents';
import Span from './components/Span';
import Button from './components/Button';
import styles from "./css/Contato.module.css";

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
    const palavras = nome.trim().split(/\s+/);
    if (palavras.length < 2) {
      setErroNome("Digite seu nome completo!");
    } else {
      setErroNome('');
    }

    if (!validarEmail(email)) {
      setErroEmail("Digite um e-mail válido!");
    } else {
      setErroEmail('');
    }

    if (mensagem.trim().length < 30) {
      setErroMensagem("Você deve escrever pelo menos 30 caracteres!");
    } else {
      setErroMensagem('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleBlur();

    if (nome === "" || email === "" || titulo === "" || mensagem === "") {
      alert("Preencha todas as informações!");
    } else if (erroNome || erroEmail || erroMensagem) {
      alert("Corrija os erros do formulário antes de enviar!");
    } else {
      alert("Enviado com sucesso!");
      setFormEnviado(true);


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

      <main className={styles.main}>
        <div className={styles.formulario}>
          <div className={styles.titulo}>
            <Title>Fale conosco!</Title>
            <Paragraph>Estamos à disposição para responder suas dúvidas.</Paragraph>
          </div>

          <form className={styles.forms} onSubmit={handleSubmit}>
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

            <Button type="submit" id="enviar" className={styles.enviar}>ENVIAR</Button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Contato;