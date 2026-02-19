import styles from './Curriculum.module.css'

export const Curriculum = () => {
    return (
        <div id="cv-section" className={styles.cv_section}>
            <div className={styles.cv_wrapper}>
                <p>Quer saber mais sobre minha trajetória ?</p>
                <a href="#" className={styles.btn_download}>
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M12 16v-8m0 8l-3-3m3 3l3-3M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2"
                        />
                    </svg> */}
                    Baixar currículo
                </a>
            </div>
        </div>
    )
}
