'use client'

import { useSoundContext } from '../Sound/SoundProvider'
import styles from './Hero.module.css'

export const Hero = () => {
    const { playHover, playClick } = useSoundContext()

    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.hero_gradient}></div>
            <div className={styles.hero_grid_lines}></div>
            <p className={styles.hero_label}>
                Portfólio - Designer & Desenvolvimento
            </p>
            <h1 className={styles.hero_title}>Criando experiências</h1>
            <p className={styles.hero_subtitle}>
                Design, código e estratégia - Tudo em um só lugar.
            </p>
            <div className={styles.hero_cta_group}>
                <a
                    href="#projects"
                    className="btnOutline"
                    onMouseEnter={playHover}
                    onClick={playClick}
                >
                    Ver projetos
                </a>
                <a
                    href="#contact"
                    className="btnGhost"
                    onMouseEnter={playHover}
                    onClick={playClick}
                >
                    Entrar em contato
                </a>
            </div>
        </section>
    )
}
