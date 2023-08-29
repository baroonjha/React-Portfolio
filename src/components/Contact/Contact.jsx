import React from 'react'
import styles from "./Contact.module.css"
import {getImageUrl} from "../../utils"

const Contact = () => {
  return (
    <section className={styles.container} id='contact'>
        <div className={styles.text}>
        <p className={styles.title}>Contact</p>
        <p className={styles.desc}>Feel free to reach out</p>
        </div>
        <div className={styles.socialLink}>
          <div className={styles.linkContainer}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="email" className={styles.Img}/>
            <p className={styles.link}><a href="mailto:baroonjha14@gmail.com">baroonjha14@gmail.com</a></p>
            </div>
            <div className={styles.linkContainer}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="email" />
            <p className={styles.link}><a href="https://www.linkedin.com/in/baroon-kumar-jha-bab390214/">Baroon Kumar Jha</a></p>
            </div>
            <div className={styles.linkContainer}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="email" />
            <p className={styles.link}><a href="https://github.com/baroonjha">Baroon Kumar Jha</a></p>
            </div>
        </div>
    </section>
  )
}

export default Contact