import styles from "./About.module.css"
export const About = () => {
  return (
    <section className={styles.about} id="about">
        <div className={styles.about_left}>
            <p className={styles.section_num}>01</p>
            <p className={styles.section_label}>Sobre mim</p>
            <h2 className={styles.about_title}>Olá, <br />Sou <em>Adriel <br />Teles. </em></h2>
        </div>
        <div className={styles.about_body}>
            <p>Sou um profissional apaixonado por criar interfaces que unem estética e funcionalidade. Trabalho na interseção entre design e tecnologia, transformando ideias complexas em experiências digitais memoráveis.</p>
            <p>Com foco em detalhes e uma visão sistêmica, desenvolvo produtos que não apenas funcionam — mas que surpreendem.</p>
        </div>
        <div className={styles.about_tags}>
            <span className={styles.tag}>Front End Developer</span>
            <span className={styles.tag}>Backend Developer</span>
            <span className={styles.tag}>React</span>
            <span className={styles.tag}>Node js</span>
            <span className={styles.tag}>Figma</span>
            <span className={styles.tag}>Motion Design</span>
        </div>
    </section>
  )
}
