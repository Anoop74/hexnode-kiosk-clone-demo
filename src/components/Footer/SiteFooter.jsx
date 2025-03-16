import React from "react";
import styles from "./SiteFooter.module.css";

export const SiteFooter = () => {
  return (
    <div className={styles.siteFooter}>
      <div className={styles.links}>
        <a href="/terms">Terms of Use</a>
        <span className={styles.separator}>-</span>
        <a href="/privacy">Privacy</a>
        <span className={styles.separator}>-</span>
        <a href="/cookies">Cookies</a>
      </div>
      <div className={styles.copyright}>
        Copyright © 2025 Mitsogo Inc. All Rights Reserved.
      </div>
    </div>
  );
};
