import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

const Experience = () => {
  return (
    <section className={styles.main} id="skills&experience">
      <p className={styles.heading}>Skills & Experience</p>
      <div className={styles.container}>
      
        <div className={styles.skills}>
        <p className={styles.heading}>Skills</p>
          <div className={styles.skillBoxx}>
            <div className={styles.skillBox}>
              <img src={getImageUrl("skills/html.png")} />
              <p>HTML</p>
            </div>
            <div className={styles.skillBox}>
              <img src={getImageUrl("skills/css.png")} />
              <p>CSS</p>
            </div>
            <div className={styles.skillBox}>
              <img src={getImageUrl("skills/node.png")} />
              <p>nodejs</p>
            </div>
          </div>
          <div className={styles.skillBoxx}>
            <div className={styles.skillBox}>
              <img src={getImageUrl("skills/mongodb.png")} />
              <p>mongoDb</p>
            </div>
            <div className={styles.skillBox}>
              <img src={getImageUrl("skills/react.png")} />
              <p>React</p>
            </div>
            <div className={styles.skillBox}>
              <img src={getImageUrl("skills/next.png")} className={styles.skillImg}/>
              <p>Nextjs</p>
            </div>
          </div>
          <div className={styles.skillBoxx}>
            <div className={styles.skillBox}>
              <img src={getImageUrl("skills/figma.png")} />
              <p>Figma</p>
            </div>
            <div className={styles.skillBox}>
              <img src={getImageUrl("skills/tailwindcss.png")} className={styles.skillImg}/>
              <p>Tailwind CSS</p>
            </div>
            <div className={styles.skillBox}>
              <img src={getImageUrl("skills/bootstrap.png")} className={styles.skillImg}/>
              <p>Boostrap</p>
            </div>
          </div>
        </div>
        <div className={styles.exp}>
        <p className={styles.heading}>Experience</p>
          <div className={styles.content}>
            {/* <img
              src={getImageUrl("history/google.png")}
              className={styles.arrowImg}
            /> */}
            <div>
              <p className={styles.title}>Fresher</p>
              <p className={styles.date}>But have good knowledge of tech stack used in the industry </p>
              {/* <p className={styles.desc}>
                <ul>
                    <li>Worked on google map</li>
                    <li>Reduced load times by 50%</li>
                </ul>
              </p> */}
            </div>
          </div>
          {/* <div className={styles.content}>
            <img
              src={getImageUrl("history/netflix.png")}
              className={styles.arrowImg}
            />
            <div>
              <p className={styles.title}>Backend Developer</p>
              <p className={styles.date}>Sept,2023-present</p>
              <p className={styles.desc}>
              <ul>
                    <li>Worked on Faster data Fetching</li>
                    <li>Reduced load times by 50%</li>
                </ul>
              </p>
            </div>
          </div>
          <div className={styles.content}>
            <img
              src={getImageUrl("history/microsoft.png")}
              className={styles.arrowImg}
            />
            <div>
              <p className={styles.title}>UI Developer</p>
              <p className={styles.date}>Sept,2023-present</p>
              <p className={styles.desc}>
              <ul>
                    <li>Worked on Bing</li>
                    <li>Customized the Panel</li>
                </ul>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
