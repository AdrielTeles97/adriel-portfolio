'use client'

import { useEffect, useState } from 'react'
import { useSoundContext } from '../Sound/SoundProvider'
import styles from './Navbar.module.css'

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const { playHover, playClick } = useSoundContext()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ' '}`}
        >
            <a
                href="#"
                className={styles.logo}
                onMouseEnter={playHover}
                onClick={playClick}
            >
                Adriel Teles
            </a>
            <ul className={styles.links}>
                <li>
                    <a
                        href="#about"
                        onMouseEnter={playHover}
                        onClick={playClick}
                    >
                        Sobre
                    </a>
                </li>
                <li>
                    <a
                        href="#education"
                        onMouseEnter={playHover}
                        onClick={playClick}
                    >
                        Educação
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        onMouseEnter={playHover}
                        onClick={playClick}
                    >
                        Projetos
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        onMouseEnter={playHover}
                        onClick={playClick}
                    >
                        Contato
                    </a>
                </li>
            </ul>
        </header>
    )
}
