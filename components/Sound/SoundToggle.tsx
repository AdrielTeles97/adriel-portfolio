'use client'

import { useSoundContext } from './SoundProvider'
import styles from './SoundToggle.module.css'

export default function SoundToggle() {
    const { isSoundEnabled, toggleSound, playClick } = useSoundContext()

    const handleClick = () => {
        playClick()
        toggleSound()
    }

    return (
        <button
            className={`${styles.sound_toggle} ${isSoundEnabled ? styles.active : ''}`}
            onClick={handleClick}
            aria-label={isSoundEnabled ? 'Desativar som' : 'Ativar som'}
        >
            <div className={styles.sound_icon}>
                {isSoundEnabled ? (
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <path d="M11 5L6 9H2v6h4l5 4V5z" />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                    </svg>
                ) : (
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <path d="M11 5L6 9H2v6h4l5 4V5z" />
                        <line x1="23" y1="9" x2="17" y2="15" />
                        <line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                )}
            </div>
            <span className={styles.sound_label}>
                {isSoundEnabled ? 'Som' : 'Mudo'}
            </span>
            <div
                className={`${styles.sound_indicator} ${isSoundEnabled ? styles.playing : ''}`}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </button>
    )
}
