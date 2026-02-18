'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null)
    const ringRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        let mx = 0,
            my = 0,
            rx = 0,
            ry = 0
        let animId: number

        const handleMouseMove = (e: MouseEvent) => {
            mx = e.clientX
            my = e.clientY
        }

        const animCursor = () => {
            if (cursorRef.current && ringRef.current) {
                cursorRef.current.style.left = mx + 'px'
                cursorRef.current.style.top = my + 'px'

                rx += (mx - rx) * 0.12
                ry += (my - ry) * 0.12

                ringRef.current.style.left = rx + 'px'
                ringRef.current.style.top = ry + 'px'
            }
            animId = requestAnimationFrame(animCursor)
        }

        animCursor()
        document.addEventListener('mousemove', handleMouseMove)

        // Hover em links e botões
        const elements = document.querySelectorAll('a, button')
        const onEnter = () => {
            if (cursorRef.current && ringRef.current) {
                cursorRef.current.style.transform =
                    'translate(-50%, -50%) scale(0)'
                ringRef.current.style.width = '56px'
                ringRef.current.style.height = '56px'
                ringRef.current.style.borderColor = 'rgba(245,244,240,0.5)'
            }
        }
        const onLeave = () => {
            if (cursorRef.current && ringRef.current) {
                cursorRef.current.style.transform =
                    'translate(-50%, -50%) scale(1)'
                ringRef.current.style.width = '36px'
                ringRef.current.style.height = '36px'
                ringRef.current.style.borderColor = 'rgba(245,244,240,0.3)'
            }
        }

        elements.forEach(el => {
            el.addEventListener('mouseenter', onEnter)
            el.addEventListener('mouseleave', onLeave)
        })

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animId)
            elements.forEach(el => {
                el.removeEventListener('mouseenter', onEnter)
                el.removeEventListener('mouseleave', onLeave)
            })
        }
    }, [])

    return (
        <>
            <div id="cursor" ref={cursorRef} />
            <div id="cursorRing" ref={ringRef} />
        </>
    )
}
