import React from 'react'
import {getImageUrl} from "../../utils"
import styles from "./Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}> Hi,I'm Baroon Kumar Jha </h1> 
            <p className={styles.desc}>I’m a full-stack Web | Blockchain developer having good knowledge of React, NodeJS and Blockchain. Reach out, if you’d like to learn more!</p>
            <a href='mailto:baroonjha14@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
       
            <img src={getImageUrl("hero/heroImage.png")} alt='photo of dev' className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
       
    </section>
  )
}

export default Hero