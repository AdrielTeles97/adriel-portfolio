'use client'

import {
    createContext,
    useContext,
    useState,
    useRef,
    useCallback,
    useEffect,
    ReactNode
} from 'react'

interface SoundContextType {
    isSoundEnabled: boolean
    toggleSound: () => void
    playHover: () => void
    playClick: () => void
    playTransition: () => void
}

const SoundContext = createContext<SoundContextType | null>(null)

export function useSoundContext() {
    const context = useContext(SoundContext)
    if (!context) {
        throw new Error('useSoundContext must be used within SoundProvider')
    }
    return context
}

interface SoundProviderProps {
    children: ReactNode
}

export function SoundProvider({ children }: SoundProviderProps) {
    const [isSoundEnabled, setIsSoundEnabled] = useState(false)
    const isInitializedRef = useRef(false)

    const ambientRef = useRef<HTMLAudioElement | null>(null)
    const hoverRef = useRef<HTMLAudioElement | null>(null)
    const clickRef = useRef<HTMLAudioElement | null>(null)
    const transitionRef = useRef<HTMLAudioElement | null>(null)

    // Initialize audio elements
    useEffect(() => {
        if (typeof window !== 'undefined' && !isInitializedRef.current) {
            // Ambient background sound
            ambientRef.current = new Audio('/sounds/ambient.mp3')
            ambientRef.current.loop = true
            ambientRef.current.volume = 0.15

            // Interaction sounds
            hoverRef.current = new Audio('/sounds/hover.mp3')
            hoverRef.current.volume = 0.1

            clickRef.current = new Audio('/sounds/click.mp3')
            clickRef.current.volume = 0.15

            transitionRef.current = new Audio('/sounds/transition.mp3')
            transitionRef.current.volume = 0.2

            isInitializedRef.current = true
        }
    }, [])

    const toggleSound = useCallback(() => {
        setIsSoundEnabled(prev => {
            const newState = !prev

            if (ambientRef.current) {
                if (newState) {
                    ambientRef.current.play().catch(() => {})
                } else {
                    ambientRef.current.pause()
                }
            }

            return newState
        })
    }, [])

    const playHover = useCallback(() => {
        if (isSoundEnabled && hoverRef.current) {
            hoverRef.current.currentTime = 0
            hoverRef.current.play().catch(() => {})
        }
    }, [isSoundEnabled])

    const playClick = useCallback(() => {
        if (isSoundEnabled && clickRef.current) {
            clickRef.current.currentTime = 0
            clickRef.current.play().catch(() => {})
        }
    }, [isSoundEnabled])

    const playTransition = useCallback(() => {
        if (isSoundEnabled && transitionRef.current) {
            transitionRef.current.currentTime = 0
            transitionRef.current.play().catch(() => {})
        }
    }, [isSoundEnabled])

    return (
        <SoundContext.Provider
            value={{
                isSoundEnabled,
                toggleSound,
                playHover,
                playClick,
                playTransition
            }}
        >
            {children}
        </SoundContext.Provider>
    )
}
