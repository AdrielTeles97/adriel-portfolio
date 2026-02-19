'use client'

import { useEffect } from 'react'

export default function RevealOnScroll() {
    useEffect(() => {
        const elements = Array.from(document.querySelectorAll('.reveal'))

        if (elements.length === 0) {
            return
        }

        if (!('IntersectionObserver' in window)) {
            elements.forEach(el => el.classList.add('visible'))
            return
        }

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.2,
                rootMargin: '0px 0px -10% 0px'
            }
        )

        elements.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return null
}
