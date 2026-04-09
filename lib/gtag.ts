// Substitua pelo seu ID do Google Analytics
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'

// Adiciona a tipagem para window.gtag
declare global {
    interface Window {
        gtag?: (...args: any[]) => void
    }
}

// Função para enviar eventos
export const pageview = (url: string) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('config', GA_TRACKING_ID, {
            page_path: url
        })
    }
}

export const event = ({
    action,
    category,
    label,
    value
}: {
    action: string
    category: string
    label: string
    value: string
}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value
        })
    }
}
