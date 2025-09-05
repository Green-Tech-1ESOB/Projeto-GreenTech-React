import Logo from './assets/logo_greentech.png';
import "./css/contato.css";
import './css/App.css';

function Contato() {

  // Váriaveis com os caminhos
let botao = document.querySelector("#enviar");
let nomeInput = document.querySelector("#nome");
let emailInput = document.querySelector("#email");
let tituloInput = document.querySelector("#titulo");
let mensagemInput = document.querySelector("#mensagem");

let erroNome = document.querySelector("#erro_nome");
let erroEmail = document.querySelector("#erro_email");
let erroMensagem = document.querySelector('#erro_mensagem')

nomeInput.addEventListener('input',function(){
    const palavras = nomeInput.value.trim().split(/\s+/); // trim - tira espaço antes e depois / split - palavras em array

    if (palavras.length < 2){
        erroNome.textContent = "Digite seu nome completo!!!";
    }else {
        erroNome.textContent = '';
    }

});

//Ao ser digitado o email enivar para a Function(validarEmail)
emailInput.addEventListener('input', function () {

    if (!validarEmail(emailInput.value)) {
        erroEmail.textContent = "Digite um e-mail válido!";
    } else {
        erroEmail.textContent = "";
    }
    
});

function validarEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Verifica se o email é valido

}

mensagemInput.addEventListener('input', function(){

    let mensagem = mensagemInput.value.trim();

    if (mensagem.length < 30){
        erroMensagem.textContent = 'Você deve escrever pelo menos 30 caracteres!!'
    }else{
        erroMensagem.textContent = ""
    }

})

//Função que é ativada a partir do click do botão
botao.addEventListener('click',function(){

    //Pega o valor dentro do caminho
    let nome = nomeInput.value;
    let email = emailInput.value;
    let titulo = tituloInput.value;
    let mensagem = mensagemInput.value;

    const palavras = nome.trim().split(/\s+/);

    let caracteres = mensagem.trim();

    if (nome === "" || email === "" || titulo === "" || mensagem === ""){

        alert("Preencha todas as informações!!");  

    }else if(palavras.length < 2) {

        alert("Preencha seu nome completo!!");  

    }else if (!validarEmail(email)) { //Puxa a resposta com a validação

        alert("Digite um e-mail válido!");

    }else if (caracteres.length < 30){

        alert("Escreva uma mensagem com mais de 30 caracteres!!");

    }else{
         alert("Enviado com sucesso!!");
        
            //Limpa os campos
            nomeInput.value = ""
            emailInput.value = ""
            tituloInput.value = ""
            mensagemInput.value = ""
        }
})


  return (
    <>
      <header>
              <div className="cabecalho-container">
                <div className="logo">
                  <a href="/">
                    <img
                      src={Logo}
                      alt="Logo GreenTech"
                      className="logo-imagem"
                    />
                    <span className="logo-texto">GreenTech</span>
                  </a>
                </div>
                <nav className="main-menu">
                  <ul>
                    <li><a href="/">Início</a></li>
                    <li><a href="/sobrenos">Sobre Nós</a></li>
                    <li><a href="/servicos">Serviços</a></li>
                    <li><a href="/contato">Contato</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/cadastro">Cadastro</a></li>
                  </ul>
                </nav>
              </div>
            </header>

      <main>
        <div id="formulario">
          <div className="titulo">
            <h1>Fale conosco!!</h1>
            <p>Estamos à disposição para responder suas dúvidas.</p>
          </div>

          <div className="forms">
            <label htmlFor="nome">Nome Completo</label>
            <input type="text" id="nome" />
            <span id="erro_nome"></span>

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />
            <span id="erro_email"></span>

            <label htmlFor="titulo">Título</label>
            <input type="text" id="titulo" />

            <label htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" rows="5" cols="30" maxLength="500"></textarea>
            <span id="erro_mensagem"></span>

            <input type="submit" id="enviar" value="ENVIAR" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Contato;