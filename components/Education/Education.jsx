import styles from './Education.module.css'

export const Education = () => {
    return (
        <section id="education" className={styles.education}>
            <div className={styles.edu_header}>
                <div>
                    <p className={styles.section_num}>02</p>
                    <p className={styles.section_label}>Formação</p>
                </div>
                <h2 className={styles.edu_title}>
                    Edu<em>cação</em>
                </h2>
            </div>
            <div className={styles.edu_list}>
                <div className={styles.edu_item}>
                    <span className={styles.edu_year}>2017 — 2020</span>
                    <div className={styles.edu_info}>
                        <h3>Análise e desenvolvimento de sistemas</h3>
                        <p>UNIASSELVI  — Belém / PA  </p>
                    </div>
                    <span className={styles.edu_badge}>Tecnologo</span>
                </div>
                <div className={styles.edu_item}>
                    <span className={styles.edu_year}>2024 - 2025</span>
                    <div className={styles.edu_info}>
                        <h3>Desenvolvimento Full Stack</h3>
                        <p>PUC MINAS</p>
                    </div>
                    <span className={styles.edu_badge}>PÓS GRADUAÇÃO</span>
                </div>
                <div className={styles.edu_item}>
                    <span className={styles.edu_year}>2022</span>
                    <div className={styles.edu_info}>
                        <h3>HTML5 e CSS3</h3>
                        <p>B7Web</p>
                    </div>
                    <span className={styles.edu_badge}>Curso</span>
                </div>
                <div className={styles.edu_item}>
                    <span className={styles.edu_year}>2025</span>
                    <div className={styles.edu_info}>
                        <h3>SQL do Zero</h3>
                        <p>B7Web</p>
                    </div>
                    <span className={styles.edu_badge}>Curso</span>
                </div>
                <div className={styles.edu_item}>
                    <span className={styles.edu_year}>2025</span>
                    <div className={styles.edu_info}>
                        <h3>Fundamentos de GIT</h3>
                        <p>B7Web</p>
                    </div>
                    <span className={styles.edu_badge}>Curso</span>
                </div>
                <div className={styles.edu_item}>
                    <span className={styles.edu_year}>2025</span>
                    <div className={styles.edu_info}>
                        <h3>GitHub na prática</h3>
                        <p>B7Web</p>
                    </div>
                    <span className={styles.edu_badge}>Curso</span>
                </div>
                <div className={styles.edu_item}>
                    <span className={styles.edu_year}>2025</span>
                    <div className={styles.edu_info}>
                        <h3>Docker</h3>
                        <p>B7Web</p>
                    </div>
                    <span className={styles.edu_badge}>Curso</span>
                </div>
                <div className={styles.edu_item}>
                    <span className={styles.edu_year}>2025</span>
                    <div className={styles.edu_info}>
                        <h3>Responsividade e Interações com Tailwind</h3>
                        <p>B7Web</p>
                    </div>
                    <span className={styles.edu_badge}>Curso</span>
                </div>
                <div className={styles.edu_item}>
                    <span className={styles.edu_year}>2025</span>
                    <div className={styles.edu_info}>
                        <h3>Fundamentos de ReactJS</h3>
                        <p>B7Web</p>
                    </div>
                    <span className={styles.edu_badge}>Curso</span>
                </div>
                <div className={styles.edu_item}>
                    <span className={styles.edu_year}>2025</span>
                    <div className={styles.edu_info}>
                        <h3>UI Design para Iniciantes</h3>
                        <p>Origamid</p>
                    </div>
                    <span className={styles.edu_badge}>Curso</span>
                </div>
                <div className={styles.edu_item}>
                    <span className={styles.edu_year}>2025</span>
                    <div className={styles.edu_info}>
                        <h3>Fundamentos de NodeJS</h3>
                        <p>B7Web</p>
                    </div>
                    <span className={styles.edu_badge}>Curso</span>
                </div>
            </div>
        </section>
    )
}
