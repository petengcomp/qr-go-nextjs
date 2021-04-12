import React, { useState } from 'react'
import QRCode from "qrcode.react";
import { ChromePicker } from 'react-color'
import styles from '../../styles/Qrcode.module.css'

export function Qrcode(props){
    const [colorFront, setColorFront] = useState('#000000');
    const [colorBack, setColorBack] = useState("#ffffff");

    return(
        <div className={styles.qrcodeContainer}>
          <div className={styles.qrcodeColorArea}>
            <div>
              <p>Cor da frente</p>
              <ChromePicker 
                color={colorFront}
                onChangeComplete={(color) => { setColorFront(color.hex) }}
              />
            </div>
            <div>
              <p>Cor do fundo</p>
              <ChromePicker 
                color={colorBack}
                onChangeComplete={(color) => { setColorBack(color.hex) }}
              />
            </div>
          </div>
          
          <QRCode 
            value={props.text} 
            size={250} 
            fgColor={colorFront} 
            bgColor={colorBack}
            style={{ marginTop: 40}}
          />
        </div>
    )
} 