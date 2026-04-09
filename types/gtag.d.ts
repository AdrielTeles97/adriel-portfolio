declare global {
    interface Window {
        gtag: {
            (command: 'js', date: Date): void
            (
                command: 'config',
                targetId: string,
                config?: Record<string, unknown>
            ): void
            (
                command: 'event',
                eventName: string,
                params?: Record<string, unknown>
            ): void
        }
    }
}

export {}
