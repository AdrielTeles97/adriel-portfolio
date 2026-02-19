'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Education.module.css'

gsap.registerPlugin(ScrollTrigger)

const educationData = [
    {
        id: 1,
        year: '2017 — 2020',
        title: 'Análise e desenvolvimento de sistemas',
        institution: 'UNIASSELVI — Belém / PA',
        badge: 'Tecnólogo'
    },
    {
        id: 2,
        year: '2024 - 2025',
        title: 'Desenvolvimento Full Stack',
        institution: 'PUC MINAS',
        badge: 'Pós Graduação'
    },
    {
        id: 3,
        year: '2022',
        title: 'HTML5 e CSS3',
        institution: 'B7Web',
        badge: 'Curso'
    },
    {
        id: 4,
        year: '2025',
        title: 'SQL do Zero',
        institution: 'B7Web',
        badge: 'Curso'
    },
    {
        id: 5,
        year: '2025',
        title: 'Fundamentos de GIT',
        institution: 'B7Web',
        badge: 'Curso'
    },
    {
        id: 6,
        year: '2025',
        title: 'GitHub na prática',
        institution: 'B7Web',
        badge: 'Curso'
    },
    {
        id: 7,
        year: '2025',
        title: 'Docker',
        institution: 'B7Web',
        badge: 'Curso'
    },
    {
        id: 8,
        year: '2025',
        title: 'Responsividade e Interações com Tailwind',
        institution: 'B7Web',
        badge: 'Curso'
    },
    {
        id: 9,
        year: '2025',
        title: 'Fundamentos de ReactJS',
        institution: 'B7Web',
        badge: 'Curso'
    },
    {
        id: 10,
        year: '2025',
        title: 'UI Design para Iniciantes',
        institution: 'Origamid',
        badge: 'Curso'
    },
    {
        id: 11,
        year: '2025',
        title: 'Fundamentos de NodeJS',
        institution: 'B7Web',
        badge: 'Curso'
    }
]

export const Education = () => {
    const sectionRef = useRef(null)
    const headerRef = useRef(null)
    const itemsRef = useRef([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header fade in
            gsap.fromTo(
                headerRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )

            // Items stagger animation
            const items = itemsRef.current.filter(Boolean)
            gsap.fromTo(
                items,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 60%',
                        toggleActions: 'play none none reverse'
                    }
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="education"
            className={`${styles.education} reveal`}
        >
            <div ref={headerRef} className={styles.edu_header}>
                <h2 className={styles.edu_title}>
                    Edu<em>cação</em>
                </h2>
            </div>

            <div className={styles.edu_list}>
                {educationData.map((item, index) => (
                    <div
                        key={item.id}
                        ref={el => {
                            itemsRef.current[index] = el
                        }}
                        className={styles.edu_item}
                    >
                        <span className={styles.edu_year}>{item.year}</span>
                        <div className={styles.edu_info}>
                            <h3>{item.title}</h3>
                            <p>{item.institution}</p>
                        </div>
                        <span className={styles.edu_badge}>{item.badge}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
