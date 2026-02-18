"use client"

import { useEffect, useState } from "react"
import styles from "./Navbar.module.css"
export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])
  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : " "}`}>
        <a href="#" className={styles.logo}>Adriel Teles</a>
        <ul className={styles.links}>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#education">Educação</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
        </ul>
    </header>
  )
}
