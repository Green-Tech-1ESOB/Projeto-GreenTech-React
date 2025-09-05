import "./css/Login.css";
import Fundo from './assets/img1.jpeg'

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
        <h2>Login</h2>

        <div className="forms">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />

          <label htmlFor="senha">Senha</label>
          <input type="number" id="senha" />

          <button>Entrar</button>

          <span>
            Ainda não tem Login? <a href="#">Cadastre-se</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
