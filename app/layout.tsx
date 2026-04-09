import type { Metadata } from 'next'
import { Syne, Outfit } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor/CustomCursor'
import RevealOnScroll from '@/components/RevealOnScroll/RevealOnScroll'
import { SoundProvider } from '@/components/Sound/SoundProvider'
import Script from 'next/script'
import ClientLayout from '@/components/ClientLayout'

const syne = Syne({
    subsets: ['latin'],
    weight: ['400', '600', '700', '800'],
    variable: '--font-display'
})

const outfit = Outfit({
    subsets: ['latin'],
    weight: ['400', '600', '700', '800'],
    variable: '--font-body'
})

export const metadata: Metadata = {
    title: 'Portfólio - Adriel Teles',
    description:
        'Portfólio do desenvolvedor Frontend Adriel Teles - Especialista em aplicações React, nextjs'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                {/* Google Analytics */}
                {/* Substitua G-XXXXXXXXXX pelo seu ID do Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
                    strategy="afterInteractive"
                />
                <Script id="gtag-init" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-XXXXXXXXXX');
                    `}
                </Script>
            </head>
            <body className={`${syne.variable} ${outfit.variable} antialiased`}>
                <SoundProvider>
                    <RevealOnScroll />
                    <CustomCursor />
                    <ClientLayout>{children}</ClientLayout>
                </SoundProvider>
            </body>
        </html>
    )
}
