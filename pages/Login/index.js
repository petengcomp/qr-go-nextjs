import { useRouter } from 'next/router'
// import api from '../api/login';
import axios from 'axios';
import styles from '../../styles/Login.module.css'
import { useState } from 'react';
import Swal from 'sweetalert2'

export default function Login(){
    const router = useRouter()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    async function handleLogin(){
        const response = await axios.post('../api/login', {
            login: login,
            password: password
        })

        console.log(response)

        if(response.data.status === 'Ok'){
            router.push('/Qrgenerator')
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Os dados digitados estão incorretos'
            })
        }
    }

    return(
        <div className={styles.loginContainer}>
            <main className={styles.loginMain}>
                <h1>QR Gen</h1>
                <section className={styles.inputSection}>
                    <input 
                        type="text" 
                        placeholder="E-mail" 
                        onChange={(e) => setLogin(e.target.value)}
                        className={styles.loginInput} 
                    />
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.loginInput} 
                    />
                </section>
                <div className={styles.loginButton} onClick={handleLogin}>
                    <img 
                        width="30px" 
                        src="login.svg" 
                        alt="Login"   
                    />
                </div>
            </main>
        </div>
    )
}