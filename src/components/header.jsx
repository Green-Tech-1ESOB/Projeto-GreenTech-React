import { useNavigate } from "react-router-dom"
import Logo from '../assets/logo_greentech.png';
import './header.css'

export const Header = () => {
    const navigator = useNavigate()

    return (
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
                        <li><a onClick={() => navigator('/')}>Início</a></li>
                        <li><a onClick={() => navigator('/sobre-nos')}>Sobre Nós</a></li>
                        <li><a onClick={() => navigator('/servicos')}>Serviços</a></li>
                        <li><a onClick={() => navigator('/contato')}>Contato</a></li>
                        <li><a onClick={() => navigator('/login')}>Login</a></li>
                        <li><a onClick={() => navigator('/cadastro')}>Cadastro</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}