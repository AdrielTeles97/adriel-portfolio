import { useEffect, useState } from 'react'
import styles from './CookieConsent.module.css'

const COOKIE_NAME = 'cookie_consent'

export default function CookieConsent() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem(COOKIE_NAME)
        if (!consent) {
            setTimeout(() => setVisible(true), 0)
        }
    }, [])

    const acceptCookies = () => {
        localStorage.setItem(COOKIE_NAME, 'true')
        setVisible(false)
    }

    const denyCookies = () => {
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div className={styles.cookieConsent}>
            <span className={styles.text}>
                Este site utiliza cookies para melhorar sua experiência. Ao
                continuar, você concorda com nossa política.
            </span>
            <button className={styles.button} onClick={acceptCookies}>
                Aceitar
            </button>
            <button className={styles.close} onClick={denyCookies}>
                Recusar
            </button>
        </div>
    )
}
