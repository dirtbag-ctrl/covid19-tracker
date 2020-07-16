// import dependencies 
import React from 'react';
//import stylesheet
import styles from './footer.module.css'

function Footer () {
    return (
        <div>
            <p className={styles.footer}>&copy; Created by Gilbert Young<span role="img" aria-label="emoji"> 👨🏽‍💻</span></p>
        </div>
    )
}

export default Footer;