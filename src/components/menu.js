import React from 'react'
import Link from 'gatsby-link'

import globalStyles from "../styles/global.module.scss"
import styles from "../styles/elements/_menu.module.scss"
import btnStyles from "../styles/elements/_buttons.module.scss"

// HeaderLink (sub)component. 
// A private component that doesn't have export.
const HeaderLink = props => (
    <Link className={styles.navLink} to={props.to}>{props.text}</Link>
)

// For Startups button (sub)component. 
const ForStartupsButton = props => (
    <Link to={props.to}>
        <div className={`${globalStyles.textUppercase} ${btnStyles.buttons} ${btnStyles.reverseBtnRed}`}><span>{props.text}</span></div>
    </Link>
)

export default function menu() {
    return (
        <div>
            <ul className={styles.navbarNav}>
                <li className={styles.navItem}>
                    <HeaderLink to="/about" text="Company" />
                </li>
                <li className={styles.navItem}>
                    <HeaderLink to="/" text="How we do it" />
                    {/* <Link to="/" className={styles.navLink}>How we do it</Link> */}
                </li>
                <li className={styles.navItem}>
                    <HeaderLink to="/" text="Case Studies" />
                </li>
                <li className={styles.navItem}>
                    <HeaderLink to="/" text="Careers" />
                </li>
                <li className={styles.navItem}>
                    <HeaderLink to="/blog" text="Blog" />
                </li>
                <li className={styles.navItem}>
                    <HeaderLink to="/" text="Contact" />
                </li>
                <li className={styles.navItem}>
                    <ForStartupsButton to="/" text="For startups" />
                </li>
            </ul>
        </div>
    )
}
