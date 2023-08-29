import React,{useState} from 'react'
import {getImageUrl} from "../../utils"

import styles from "./Navbar.module.css"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar} >
        <a className={styles.title} href='/'>Portfolio</a>
        <div className={styles.menu}>
            <img  className={styles.menubtn} src={menuOpen 
                ?getImageUrl("nav/closeIcon.png")
                :getImageUrl("nav/menuIcon.png")}
                onClick={()=>setMenuOpen(!menuOpen)}
                alt="menu-btn"/>
            <ul className={`${styles.menuitem} ${menuOpen && styles.menuOpen}`} onClick={()=>setMenuOpen(false)}>
                <li><a href="#about">About</a></li>
                <li><a href="#skills&experience">Experience</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  )
}
