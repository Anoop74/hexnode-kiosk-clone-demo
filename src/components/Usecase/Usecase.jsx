import React, { useState, useEffect } from "react";
import styles from "./Usecase.module.css";
import singleAppImage from "../../assets/usecase/single-app-kios-image.webp";
import multiAppImage from "../../assets/usecase/multi-app-kiosk-image.webp";
import webBasedImage from "../../assets/usecase/web-based-kiosk-image.webp";
import digitalSignagesImage from "../../assets/usecase/digital-signage-kiosk-image.webp";
import asamImage from "../../assets/usecase/asam-kiosk-image.webp";

export const Usecase = () => {
  const [activeTab, setActiveTab] = useState("Single App Kiosk");
  const [openTab, setOpenTab] = useState("Single App Kiosk");
  const [isMobile, setIsMobile] = useState(false);
  const [direction, setDirection] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const tabs = [
    "Single App Kiosk",
    "Multi-App Kiosk",
    "Web-based Kiosk",
    "Digital Signages",
    "ASAM Kiosk",
  ];

  const titles = {
    "Single App Kiosk":
      "Powerful Single-App Kiosk solutions for enhanced control",
    "Multi-App Kiosk": "Elevate efficiency with Multi-App Kiosk",
    "Web-based Kiosk": "Explore the new way to manage web apps and websites",
    "Digital Signages": "Capture attention with Digital Signage Kiosks",
    "ASAM Kiosk": "Unlock the power of Autonomous Single App Mode (ASAM)",
  };

  const points = {
    "Single App Kiosk": [
      "Provision the devices to run one specialized application, with limited functionalities.",
      "Customize the device settings to cater to a specific use-case each time.",
      "Use Hexnode's Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.",
      "Empower your administrators with full control over the kiosk devices.",
    ],
    "Multi-App Kiosk": [
      "Limit device access to approved apps, ensuring focus and productivity.",
      "With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.",
      "With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.",
      "Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.",
    ],
    "Web-based Kiosk": [
      "Let users access essential and approved web apps, website and files only.",
      "Make the best use of website kiosk with Hexnode's advanced settings.",
      "Tailor your experience to match your unique use case.",
      "From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.",
    ],
    "Digital Signages": [
      "Transform your devices into captivating digital signage kiosks that grab attention.",
      "Engage your audience with vibrant images and seamless video streaming.",
      "Customize media files with trimming, muting, and background music.",
      "Advertise and show off your brand aesthetics to attract customers in different ways.",
      "Take control with Hexnode to reestablish your brand's presence.",
    ],
    "ASAM Kiosk": [
      "A feature that empowers your iOS app to seamlessly secure itself in the foreground.",
      "Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.",
      "Create focused, efficient and secure digital environments to match your requirements.",
      "Configure ASAM effortlessly and elevate your user experience like never before.",
    ],
  };

  const images = {
    "Single App Kiosk": singleAppImage,
    "Multi-App Kiosk": multiAppImage,
    "Web-based Kiosk": webBasedImage,
    "Digital Signages": digitalSignagesImage,
    "ASAM Kiosk": asamImage,
  };

  const handleTabClick = (tab) => {
    if (isMobile) {
      setOpenTab(openTab === tab ? null : tab);
    } else {
      const currentIndex = tabs.indexOf(activeTab);
      const newIndex = tabs.indexOf(tab);
      setDirection(newIndex > currentIndex ? "right" : "left");
      setActiveTab(tab);
    }
  };

  return (
    <div className={styles.usecaseContainer}>
      <h2 className={styles.usecaseTitle}>
        Specific kiosk modes for unique use cases
      </h2>

      {isMobile ? (
        <div className={styles.mobileAccordion}>
          {tabs.map((tab) => (
            <div key={tab} className={styles.accordionItem}>
              <button
                className={`${styles.accordionButton} ${
                  openTab === tab ? styles.active : ""
                }`}
                onClick={() => handleTabClick(tab)}
              >
                <span>{tab}</span>
                <span className={styles.accordionIcon}></span>
              </button>

              {openTab === tab && (
                <div className={styles.accordionContent}>
                  {tab === openTab && (
                    <>
                      <div className={styles.usecaseImage}>
                        <img src={images[tab]} alt={tab} />
                      </div>
                      <h3 className={styles.mobileTitle}>{titles[tab]}</h3>
                      <ul className={styles.mobileList}>
                        {points[tab].map((point, index) => (
                          <li key={index} className={styles.mobileListItem}>
                            <span className={styles.checkmark}>✓</span>
                            <span className={styles.pointText}>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className={styles.usecaseTabs}>
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`${styles.usecaseTab} ${
                  activeTab === tab ? styles.active : ""
                } ${styles.animatedTab}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div
            className={`${styles.usecaseContent} ${
              direction ? styles[`slide-${direction}`] : ""
            }`}
          >
            <div className={styles.usecaseText}>
              <h3>{titles[activeTab]}</h3>
              <ul>
                {points[activeTab].map((point, index) => (
                  <li key={index}>
                    <span className={styles.checkmark}>✓</span> {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.usecaseImage}>
              <img src={images[activeTab]} alt={activeTab} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
