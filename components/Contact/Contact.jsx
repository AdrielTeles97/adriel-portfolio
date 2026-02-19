import styles from './Contact.module.css'

export const Contact = () => {
    return (
        <section id="contact" className={`${styles.contact} reveal`}>
            <p className={styles.contact_label}>04 — Contato</p>
            <h2 className={styles.contact_title}>
                Vamos
                <br />
                <em>Trabalhar</em>
                <br />
                Juntos ?
            </h2>
            <a href="mailto:adrielteles@dev.com" className={styles.contact_email}>
                adrielteles@dev.com
            </a>
            <div className={styles.contact_socials}>
                <a href="#" className={styles.social_link}>
                    LinkedIn
                </a>
                <span style={{color: "var(--border)" }}>—</span>
                <a href="#" className={styles.social_link}>
                    GitHub
                </a>
                <span style={{color: "var(--border)" }}>—</span>
                <a href="#" className={styles.social_link}>
                    Twitter
                </a>
                <span style={{color: "var(--border)" }}>—</span>
                <a href="#" className={styles.social_link}>
                    Instagram
                </a>
            </div>
        </section>
    )
}
