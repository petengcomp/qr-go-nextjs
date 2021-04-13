import styles from '../../styles/TabNavigator.module.css';
import { useRouter } from "next/router";

export function TabNavigator(){
    const router = useRouter();

    return(
        <div className={styles.tabNavigatorContainer}>
            <div className={styles.tabNavigatorTopbar}>
                <h1>QR Gen</h1>
            </div>
            <a className={styles.tabNavigatorMap} href="https://qr-go-map.herokuapp.com/" target="__blank">
                <img 
                    width="50px" 
                    src="qr-map.svg" 
                    alt="Mapa do QRGO"   
                /> 
            </a>

            <a onClick={() => router.push('/')}>
                <img 
                    width="30px" 
                    src="login.svg" 
                    alt="Logout"   
                />
            </a>
        </div>
    )

}