import React, {useState} from 'react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Qrcode } from '../../components/Qrcode'
import { Generatepdf } from '../../components/Generatepdf';
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import { TabNavigator } from '../../components/TabNavigator';

export default function Qrgenerator() {
  const [textQR, setTextQR] = useState('');
  const [locale, setLocale] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>QR code generate</title>
        <link rel="icon" href="/qr.svg" />
      </Head>

      <div onClick={() => setOpen(!open)} className={styles.menu}>
          {
            open ? 
            (<><FiChevronsLeft 
              color="#ffffff"
              size={35}
            />
            <TabNavigator /></>
            ) : 
            <FiChevronsRight 
              color="#ffffff"
              size={35}
            />
          }
          
      </div>
      

      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.inputArea}>
            <textarea 
              className={styles.titleLocale} 
              type="text" 
              value={locale} 
              onChange={text => setLocale(text.target.value)} 
              placeholder="Local do QR"
            />
            <textarea 
              className={styles.text} 
              type="text" 
              value={textQR} 
              onChange={text => setTextQR(text.target.value)} 
              placeholder="Digite o texto da pista..."
            />
            <div className={styles.instructions}>
              <h3>Intruções</h3>
              <p>
                Essa página gera todos os QR Codes que serão impressos e usados no QR GO.
                id - Ordem do Qrcode. Começa em 1.
              </p>
              <p>
                quant_qrs - Total de QR Codes.
                validacao - Usado para verificar se o Qrcode pertence à gincana. Atualmente "@PETEngComp"
              </p>
              <p>
                lugar - Título do Local
              </p>
              <p>
                desc- Descrição do local
              </p>
              <p>
                dica_prox - Dica para o local seguinte.
              </p>
              
            </div>
          </div>
          <div className={styles.qrArea}>
            <Qrcode text={textQR}/>
            <Generatepdf title={locale}/>
          </div>
          
          
        </div>
      </main>
    </div>
  )
}
