import React from 'react'
import styles from "./About.module.css"
import { getImageUrl } from '../../utils'
getImageUrl

const About = () => {
  return (
    <section className={styles.main} id='about'>
    <h4 className={styles.heading}>ABOUT</h4>
    <about className={styles.container}>
        <img src={getImageUrl("about/aboutImage.png")}className={styles.heroImg} />
        <div className={styles.aboutItem}>
            <div className={styles.content}>
              <img src={getImageUrl("about/cursorIcon.png")} className={styles.arrowImg}/>
              <div>
              <p className={styles.title}>Frontend Developer</p>
              <p className={styles.desc}>I’m a front-end developer with experience in building responsive and optimized sites</p>
              </div>
            </div>
            <div className={styles.content}>
              <img src={getImageUrl("about/serverIcon.png")} className={styles.arrowImg}/>
              <div>
              <p className={styles.title}>Backend Developer</p>
              <p className={styles.desc}>I have experience developing fast and optimised back-end systems and APIs</p>
              </div>
            </div>
            <div className={styles.content}>
              <img src={getImageUrl("about/uiIcon.png")} className={styles.Img}/>
              <div>
              <p className={styles.title}>UI Developer</p>
              <p className={styles.desc}>I have designed multiple landing pages and have created design systems as well</p>
              </div>
            </div>
        </div>

    </about>
    </section>
  )
}

export default About