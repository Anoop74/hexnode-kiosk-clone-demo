import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import btn from "../CustomButton/CustomButton.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`${styles.fullwidthcontainer} ${
        scrolled ? styles.scrolled : ""
      }`}
    >
      <div className={styles.contentcontainer}>
        <nav className={styles.navbar}>
          <a className={styles.title}>hexnode</a>

          <div className={styles.navbarButtons}>
            <button className={btn.submitbutton}>14 DAY FREE TRIAL</button>
          </div>

          <div className={styles.menu}>
            <div
              className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              className={`${styles.menuItems} ${
                menuOpen ? styles.menuOpen : ""
              }`}
            >
              <div className={styles.menuContent}>
                <button className={btn.submitbutton}>14 DAY FREE TRIAL</button>
                <a className={styles.loginButton}>Login</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayActive : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>
    </div>
  );
};
