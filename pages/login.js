import Link from 'next/link'
import styles from '../styles/Login.module.css'

export function Login(){
    return(
        <div className={styles.loginContainer}>
            <main className={styles.loginMain}>
                <h1>QR Gen</h1>
                <section className={styles.inputSection}>
                    <input type="text" placeholder="E-mail" className={styles.loginInput} />
                    <input type="password" placeholder="Senha" className={styles.loginInput} />
                </section>
                <Link href='/qrgenerator'>
                <div className={styles.loginButton}>
                    <img 
                        width="30px" 
                        src="login.svg" 
                        alt="Login"   
                    />
                </div>
                </Link>
            </main>
        </div>
    )
}