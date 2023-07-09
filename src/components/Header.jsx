import React from "react";
import { Link } from "react-router-dom";
import darkEmpty from "../assets/dark-empty.svg";
import darkFull from "../assets/dark-full.svg";
import styles from '../styles/styles.module.css';


const Header = (props) => {
    return (
        <header>
            <div className={styles.container}>
                <Link className={styles.logo} to="/">Where in the world?</Link>
                <div className={styles.darkmodeToggler} onClick={props.clickHandler}>
                <img src={props.darkMode ? darkFull : darkEmpty} alt="Dark mode image" />
                <p>{props.darkMode ? "Light" : "Dark"}Mode</p>
                </div>
            </div>
        </header>
    )
}

export default Header;