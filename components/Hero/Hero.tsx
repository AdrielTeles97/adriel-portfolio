import styles from "./Hero.module.css"
export const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
        <div className={styles.hero_gradient}></div>
        <div className={styles.hero_grid_lines}></div>
        <p className={styles.hero_label}>Portfólio - Designer & Desenvolvimento</p>
        <h1 className={styles.hero_title}>
            Criando experiências
        </h1>
        <p className={styles.hero_subtitle}>Design, código e estratégia - Tudo em um só lugar.</p>
        <div className={styles.hero_cta_group}>
            <a href="#project" className="btnOutline">Ver projetos</a>
            <a href="#contact" className="btnGhost">Entrar em contato</a>
        </div>
    </section>
  )
}
