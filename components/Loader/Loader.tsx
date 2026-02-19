'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import styles from './Loader.module.css'

interface LoaderProps {
    onComplete: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
    const loaderRef = useRef<HTMLDivElement>(null)
    const counterRef = useRef<HTMLSpanElement>(null)
    const progressRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Counter animation
            const counterAnim = { value: 0 }

            gsap.to(counterAnim, {
                value: 100,
                duration: 2.5,
                ease: 'power2.inOut',
                onUpdate: () => {
                    setCounter(Math.floor(counterAnim.value))
                }
            })

            // Progress bar
            gsap.to(progressRef.current, {
                scaleX: 1,
                duration: 2.5,
                ease: 'power2.inOut'
            })

            // Text reveal
            gsap.fromTo(
                textRef.current,
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: 0.2
                }
            )

            // Exit animation
            gsap.to(loaderRef.current, {
                yPercent: -100,
                duration: 0.8,
                ease: 'power3.inOut',
                delay: 3,
                onComplete: onComplete
            })
        }, loaderRef)

        return () => ctx.revert()
    }, [onComplete])

    return (
        <div ref={loaderRef} className={styles.loader}>
            <div className={styles.loader_content}>
                <div ref={textRef} className={styles.loader_text}>
                    <span className={styles.loader_name}>Adriel Teles</span>
                    <span className={styles.loader_role}>
                        Frontend Developer
                    </span>
                </div>
                <div className={styles.loader_progress_wrapper}>
                    <div ref={progressRef} className={styles.loader_progress} />
                </div>
                <span ref={counterRef} className={styles.loader_counter}>
                    {counter}%
                </span>
            </div>
        </div>
    )
}
