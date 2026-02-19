'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Projects.module.css'

gsap.registerPlugin(ScrollTrigger)

interface Project {
    id: number
    title: string
    category: string
    year: string
    description: string
    image: string
    link?: string
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Suporte Bel',
        category: 'Web Development',
        year: '2025',
        description:
            'Site institucional para empresa de suporte técnico e informática',
        image: '/projects/www.suportebel.com_.png',
        link: 'https://suportebel.com'
    },
    {
        id: 2,
        title: 'Nihon Acessórios',
        category: 'E-commerce',
        year: '2025',
        description: 'Loja virtual completa de acessórios automotivos',
        image: '/projects/www.nihonacessoriosautomotivos.com.br_.png',
        link: 'https://www.nihonacessoriosautomotivos.com.br'
    },
    {
        id: 3,
        title: 'Dashboard Bel',
        category: 'Aplicação Interna',
        year: '2025',
        description:
            'Dashboard de gestão interna com métricas e análise de dados',
        image: '/projects/dashboard bel informatica.png'
    }
]

export const Projects = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)
    const trackRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const track = trackRef.current
            if (!track) return

            const totalScroll = track.scrollWidth - window.innerWidth

            // Horizontal scroll animation
            gsap.to(track, {
                x: -totalScroll,
                ease: 'none',
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: 'top top',
                    end: () => `+=${totalScroll}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true
                }
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={sectionRef} id="projects" className={styles.projects}>
            <div ref={triggerRef} className={styles.projects_container}>
                {/* Header fixo no topo */}
                <div className={styles.projects_header}>
                    <div className={styles.header_left}>
                        <p className={styles.section_num}>03</p>
                        <p className={styles.section_label}>Portfólio</p>
                    </div>
                    <div className={styles.header_right}>
                        <h2 className={styles.projects_title}>
                            Proje<em>tos</em>
                        </h2>
                        <p className={styles.projects_subtitle}>
                            Alguns dos projetos desenvolvidos com carinho por
                            mim.
                        </p>
                    </div>
                </div>

                {/* Track horizontal com cards */}
                <div ref={trackRef} className={styles.projects_track}>
                    {projects.map(project => (
                        <article
                            key={project.id}
                            className={`${styles.project_card} ${project.link ? styles.clickable : ''}`}
                        >
                            {project.link ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.card_link_wrapper}
                                >
                                    <div className={styles.card_visual}>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'top'
                                            }}
                                        />
                                    </div>
                                    <div className={styles.card_content}>
                                        <div className={styles.card_meta}>
                                            <span
                                                className={styles.card_category}
                                            >
                                                {project.category}
                                            </span>
                                            <span className={styles.card_year}>
                                                {project.year}
                                            </span>
                                        </div>
                                        <div className={styles.card_bottom}>
                                            <div>
                                                <h3
                                                    className={
                                                        styles.card_title
                                                    }
                                                >
                                                    {project.title}
                                                </h3>
                                                <p
                                                    className={
                                                        styles.card_description
                                                    }
                                                >
                                                    {project.description}
                                                </p>
                                            </div>
                                            <div className={styles.card_arrow}>
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ) : (
                                <>
                                    <div className={styles.card_visual}>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'top'
                                            }}
                                        />
                                    </div>
                                    <div className={styles.card_content}>
                                        <div className={styles.card_meta}>
                                            <span
                                                className={styles.card_category}
                                            >
                                                {project.category}
                                            </span>
                                            <span className={styles.card_year}>
                                                {project.year}
                                            </span>
                                            <span
                                                className={
                                                    styles.internal_badge
                                                }
                                            >
                                                Interno
                                            </span>
                                        </div>
                                        <div className={styles.card_bottom}>
                                            <div>
                                                <h3
                                                    className={
                                                        styles.card_title
                                                    }
                                                >
                                                    {project.title}
                                                </h3>
                                                <p
                                                    className={
                                                        styles.card_description
                                                    }
                                                >
                                                    {project.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </article>
                    ))}

                    {/* CTA no final do track */}
                    <div className={styles.projects_cta}>
                        <h3 className={styles.cta_title}>
                            Que tal um projeto <em>parecido</em> para você?
                        </h3>
                        <p className={styles.cta_text}>
                            Vamos transformar sua ideia em realidade.
                        </p>
                        <a href="#contact" className={styles.cta_button}>
                            Iniciar conversa
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
