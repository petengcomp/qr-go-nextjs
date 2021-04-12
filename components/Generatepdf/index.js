import React from "react";
import { jsPDF } from "jspdf";
import styles from '../../styles/Generatepdf.module.css'

export function Generatepdf(props){
    const generatePdf = () => {
        // Default export is a4 paper, portrait, using millimeters for units
        const doc = new jsPDF();

        const canvas = document.getElementsByTagName("canvas")[0];
        if (canvas) {
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");

            doc.addImage(pngUrl, doc.internal.pageSize.width/5, 70, 120, 120);
        }
        doc.setFontSize(50);
        doc.setFont("helvetica", "none", "bold");
        doc.text(props.title, doc.internal.pageSize.width/2, 40, null, null, 'center');
        doc.save(`${props.title}.pdf`);
    
    };

    return(
        <div className={styles.buttonContainer}>
            <button className={styles.button} onClick={generatePdf}>Gerar PDF</button>
        </div>
    )
}