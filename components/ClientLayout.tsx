'use client'
import CookieConsent from '@/components/CookieConsent/CookieConsent'

export default function ClientLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <CookieConsent />
            {children}
        </>
    )
}
