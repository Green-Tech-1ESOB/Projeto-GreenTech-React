import { useNavigate } from "react-router-dom"
import Logo from '../assets/logo_greentech.png';
import styles from './Header.module.css';

import Link from "./Link";

export const Header = () => {
    const navigator = useNavigate()

    return (
        <header className={styles.header}> {/* Usa styles.header */}
            <div className={styles.cabecalhoContainer}> {/* Usa styles.cabecalhoContainer */}
                <div className={styles.logo}> {/* Usa styles.logo */}
                    <Link onClick={() => navigator('/')}>
                        <img
                            src={Logo}
                            alt="Logo GreenTech"
                            className={styles.logoImagem}
                        />
                        <span className={styles.logoTexto}>GreenTech</span> {/* Usa styles.logoTexto */}
                    </Link>
                </div>
                <nav className={styles.mainMenu}> {/* Usa styles.mainMenu */}
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