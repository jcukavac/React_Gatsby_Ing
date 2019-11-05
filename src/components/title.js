import React from 'react'

import styles from "../styles/pages/index.module.scss"
import globalStyles from "../styles/global.module.scss"

export default function title(props) {
    return (
        <div className={globalStyles.row}>
            <div className={`${globalStyles.colLg6} ${globalStyles.p0}`}>
                <h1 className={styles.mainHeading}>
                    {props.title}
                </h1>
                <p className={styles.mainParagraph}>{props.text}</p>
            </div>

            <div className={`${globalStyles.colLg6} ${globalStyles.p0} ${globalStyles.mtMd0} ${globalStyles.mt3} ${globalStyles.alignSelfCenter}`}>
                
                <img src={props.image} alt={props.alt} />
            </div>
        </div>
    )
}
