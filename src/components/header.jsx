import { useNavigate } from "react-router-dom"
import Logo from '../assets/logo_greentech.png';
import './header.css'

import Link from "./Link";

export const Header = () => {
    const navigator = useNavigate()

    return (
        <header>
            <div className="cabecalho-container">
                <div className="logo">
                    <Link onClick={() => navigator('/')}>
                        <img
                            src={Logo}
                            alt="Logo GreenTech"
                            className="logo-imagem"
                        />
                        <span className="logo-texto">GreenTech</span>
                    </Link>
                </div>
                <nav className="main-menu">
                    <ul>
                        <li><Link onClick={() => navigator('/')}>Início</Link></li>
                        <li><Link onClick={() => navigator('/sobre-nos')}>Sobre Nós</Link></li>
                        <li><Link onClick={() => navigator('/servicos')}>Serviços</Link></li>
                        <li><Link onClick={() => navigator('/contato')}>Contato</Link></li>
                        <li><Link onClick={() => navigator('/login')}>Login</Link></li>
                        <li><Link onClick={() => navigator('/cadastro')}>Cadastro</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}