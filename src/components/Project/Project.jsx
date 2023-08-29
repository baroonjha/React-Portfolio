import React from "react";
import styles from "./Project.module.css";
import { getImageUrl } from "../../utils";

export const Project = () => {
  return (
    <section className={styles.main} id="project">
      <p className={styles.heading}>Projects</p>
      <div className={styles.container}>
        <div className={styles.project}>
          <img
            src={getImageUrl("projects/tic-tac.jpg")}
            className={styles.Img}
          />
          <p className={styles.title}>Tic-Tac-Toe Game</p>
          <p className={styles.desc}>
            This is a project made to learn the concept of JavaScript and React.
          </p>
          <div className={styles.skills}>
            <p className={styles.skillName}>React</p>
            <p className={styles.skillName}>JavaScript</p>
            <p className={styles.skillName}>CSS</p>
          </div>
          <div className={styles.button}>
            <button className={styles.btnText}>
              <a href="https://tic-tac-toe-game-pink-nu.vercel.app/">Demo</a>
            </button>
            <button className={styles.btnText}>
              <a href="https://github.com/baroonjha/tic-tac-toe-game">Source Code</a>
            </button>
          </div>
        </div>
        <div className={styles.project}>
          <img
            src={getImageUrl("projects/project.png")}
            className={styles.img}
          />
          <p className={styles.title}>Project B</p>
          <p className={styles.desc}>
            This is a project made to learn the latest languages by building an
            app.
          </p>
          <div className={styles.skills}>
            <p className={styles.skillName}>React</p>
            <p className={styles.skillName}>Express</p>
            <p className={styles.skillName}>Nodejs</p>
          </div>
          <div className={styles.button}>
            <button className={styles.btnText}>
              <a href="https://google.com">Demo</a>
            </button>
            <button className={styles.btnText}>
              <a href="https://github.com/baroonjha">Source Code</a>
            </button>
          </div>
        </div>
        <div className={styles.project}>
          <img
            src={getImageUrl("projects/project.png")}
            className={styles.img}
          />
          <p className={styles.title}>Project B</p>
          <p className={styles.desc}>
            This is a project made to learn the latest languages by building an
            app.
          </p>
          <div className={styles.skills}>
            <p className={styles.skillName}>React</p>
            <p className={styles.skillName}>Express</p>
            <p className={styles.skillName}>Nodejs</p>
          </div>
          <div className={styles.button}>
            <button className={styles.btnText}>
              <a href="https://google.com">Demo</a>
            </button>
            <button className={styles.btnText}>
              <a href="https://github.com/baroonjha">Source Code</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
