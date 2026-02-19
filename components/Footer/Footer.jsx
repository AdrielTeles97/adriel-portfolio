import { Coffee } from "lucide-react"
import styles from "./Footer.module.css"

export const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
  return (
    <footer className={styles.footer}>
        <p>&copy; {year} - Todos os direitos reservados. </p>
        <span className={styles.footer_logo}>Adriel Teles</span>
        <div className={styles.iLoveCoffe}>
            <p>Feito com código e café. </p>
            <Coffee />
        </div>
    </footer>
  )
}
