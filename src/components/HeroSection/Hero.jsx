import React from "react";
import kiosk from "../../assets/heroImages/hexnode-kiosk.webp";
import idc from "../../assets/achivements/idc.webp";
import gartner from "../../assets/achivements/gartner.webp";
import forrester from "../../assets/achivements/forrester.webp";
import styles from "./Hero.module.css";
import btn from "../CustomButton/CustomButton.module.css";

export const Hero = () => {
  return (
    <div>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.heading}>
              Turn your devices into kiosks in a few minutes with Hexnode UEM
            </h1>

            <div className={styles.formGroup}>
              <input
                type="email"
                placeholder="Your Work Email"
                className={styles.inputField}
                aria-label="Enter your work email"
              />
              <button
                className={btn.herosubmitbutton}
                aria-label="Get started now"
              >
                GET STARTED NOW!
              </button>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <img src={kiosk} alt="Mobile Kiosk" className={styles.heroImg} />
          </div>
        </div>
      </section>

      <section className={styles.achievementSection}>
        <div className={styles.achievementContainer}>
          <div className={styles.achievement}>
            <img
              src={idc}
              alt="IDC MarketScape Leader 2024"
              className={styles.achievementLogo}
            />
            <p className={styles.achievementText}>
              Hexnode is listed as a leader and a major player in IDC
              MarketScape UEM Vendors Assessment Reports 2024.
            </p>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.achievement}>
            <img
              src={gartner}
              alt="Gartner Market Guide 2025"
              className={styles.achievementLogo}
            />
            <p className={styles.achievementText}>
              Hexnode was recognized in the 2025 Gartner® Market Guide for
              Unified Endpoint Management Tools.
            </p>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.achievement}>
            <img
              src={forrester}
              alt="Forrester UEM Landscape Q3 2023"
              className={styles.achievementLogo}
            />
            <p className={styles.achievementText}>
              Forrester includes Hexnode as a Notable vendor in The Unified
              Endpoint Management Landscape, Q3 2023.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
