import { Paragraph } from "./TextComponents";
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <Paragraph>&copy; 2025 GreenTech. Todos os direitos reservados.</Paragraph>
        </footer>
    )
}