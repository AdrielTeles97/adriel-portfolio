'use client'

import { useState } from 'react'
import { Navbar } from '@/components/Navbar/Navbar'
import { Hero } from '@/components/Hero/Hero'
import { About } from '@/components/About/About'
import { Education } from '@/components/Education/Education'
import { Projects } from '@/components/Projects/Projects'
import { Curriculum } from '@/components/Curriculum/Curriculum'
import { Contact } from '@/components/Contact/Contact'
import { Footer } from '@/components/Footer/Footer'
import Loader from '@/components/Loader/Loader'
import SoundToggle from '@/components/Sound/SoundToggle'
import styles from './HomeClient.module.css'

export default function HomeClient() {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <>
            {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

            <div
                className={`${styles.main_content} ${!isLoading ? styles.visible : ''}`}
            >
                <Navbar />
                <Hero />
                <About />
                <Education />
                <Projects />
                <Curriculum />
                <Contact />
                <Footer />
                <SoundToggle />
            </div>
        </>
    )
}
