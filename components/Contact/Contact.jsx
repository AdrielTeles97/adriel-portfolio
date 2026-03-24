import styles from './Contact.module.css'

export const Contact = () => {
    return (
        <section id="contact" className={`${styles.contact} reveal`}>
            <p className={styles.contact_label}>04 — Contato</p>
            <h2 className={styles.contact_title}>
                Vamos
                <br />
                <em>
                    Trabal
                    <wbr />
                    har
                </em>
                <br />
                Juntos ?
            </h2>
            <a href="mailto:adrielteles@dev.com" className={styles.contact_email}>
                adrielteles@dev.com
            </a>
            <div className={styles.contact_socials}>
                <a
                    href="https://www.linkedin.com/in/adriel-teles97/"
                    className={styles.social_link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                <span className={styles.social_sep}>—</span>
                <a
                    href="https://github.com/AdrielTeles97"
                    className={styles.social_link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <span className={styles.social_sep}>—</span>
                <a href="#" className={styles.social_link}>
                    Twitter
                </a>
                <span className={styles.social_sep}>—</span>
                <a href="#" className={styles.social_link}>
                    Instagram
                </a>
            </div>
        </section>
    )
}
