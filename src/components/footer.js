import React from 'react';
import styles from "../styles/components/footer.module.scss"

// SocialButton (sub)component
const SocialButton = (props) => {
    let style = '';
    let url = '';

    switch (props.site) {
        case 'facebook':
            style = styles.buttonFacebook;
            url = "https://facebook.com/ingsoftware";
            break;
        case 'linkedin':
            style = styles.buttonLinkedin;
            url = "https://linkedin.com/company/ing-software";
            break;
        case 'instagram':
            style = styles.buttonInstagram;
            url = "https://instagram.com/ingsoftware_";
            break;
        case 'twitter':
            style = styles.buttonTwitter;
            url = "https://twitter.com/ingsoftware_";
            break;
        case 'clutch':
            style = styles.buttonClutch;
            url = "https://facebook.com/profile/ingsoftware";
            break;
        default:
            url = "https://www.ingsoftware.com/";
    }

    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <span className={style}>{props.children}&nbsp;</span>
        </a>
    )
}

export default function footer() {
    return (
        <footer className={styles.container}>
            <section id="social-media" className={styles.row}>
                <SocialButton site="facebook"></SocialButton>
                <SocialButton site="linkedin"></SocialButton>
                <SocialButton site="instagram"></SocialButton>
                <SocialButton site="twitter"></SocialButton>
                <SocialButton site="clutch"></SocialButton>
            </section>
        </footer>
    )
}
