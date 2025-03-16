import React from "react";
import styles from "./Platforms.module.css"; // Import CSS module

import android from "../../assets/platforms/android.svg";
import windows from "../../assets/platforms/windows.svg";
import ios from "../../assets/platforms/ios.svg";
import androidtv from "../../assets/platforms/android-tv.svg";
import appletv from "../../assets/platforms/apple-tv.svg";
import fire from "../../assets/platforms/amazon-fire.webp";

export const Platforms = () => {
  const platforms = [
    { src: android, name: "Android" },
    { src: windows, name: "Windows" },
    { src: ios, name: "iOS" },
    { src: androidtv, name: "Android TV" },
    { src: appletv, name: "Apple TV" },
    { src: fire, name: "Fire TV" },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Platforms supported</h2>
      <div className={styles.platformsGrid}>
        {platforms.map((platform, index) => (
          <div key={index} className={styles.platformItem}>
            <img
              src={platform.src}
              alt={platform.name}
              className={styles.platformImage}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Platforms;