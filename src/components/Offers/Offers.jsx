import React, { useState } from "react";
import styles from "./Offers.module.css";
import effortimg from "../../assets/offers/effortless.webp";
import custom from "../../assets/offers/customized-image.webp";
import power from "../../assets/offers/power-up.webp";
import secure from "../../assets/offers/secure.webp";
import easy from "../../assets/offers/easy-to-use.webp";

export const Offers = () => {
  const [activeTab, setActiveTab] = useState(
    "Effortless kiosk deployment & management"
  );
  const [openTab, setOpenTab] = useState(
    "Effortless kiosk deployment & management"
  );

  const tabs = [
    "Effortless kiosk deployment & management",
    "Customized interface for brand visibility",
    "What more can you do with Hexnode kiosk?",
    "Secure and update your app ecosystem",
    "Provide an easy-to-use interface for end-users",
  ];

  const descriptions = {
    "Effortless kiosk deployment & management":
      "Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.",

    "Customized interface for brand visibility":
      "Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.",

    "What more can you do with Hexnode kiosk?":
      "Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.",

    "Secure and update your app ecosystem":
      "Streamline the deployment and management of apps on your kiosk devices. Save your time and effort, ensure security and improve efficiency using Hexnode's silent app installation and update features.",

    "Provide an easy-to-use interface for end-users":
      "Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface lets them access only the essential settings they need.",
  };

  const images = {
    "Effortless kiosk deployment & management": effortimg,
    "Customized interface for brand visibility": custom,
    "What more can you do with Hexnode kiosk?": power,
    "Secure and update your app ecosystem": secure,
    "Provide an easy-to-use interface for end-users": easy,
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setOpenTab(tab);
  };

  return (
    <div className={styles.usecaseContainer}>
      <h2 className={styles.usecaseTitle}>
        What additional possibilities does the Kiosk mode offer?
      </h2>

      <div className={styles.contentContainer}>
        <div className={styles.deviceImageContainer}>
          <img
            src={images[activeTab]}
            alt="Kiosk Device"
            className={styles.deviceImage}
          />
        </div>

        <div className={styles.featuresContainer}>
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`${styles.featureItem} ${
                activeTab === tab ? styles.activeFeature : ""
              }`}
              onClick={() => handleTabClick(tab)}
            >
              <h3>{tab}</h3>
              {activeTab === tab && <p>{descriptions[tab]}</p>}
              {activeTab === tab && (
                <a href="#" className={styles.tryFreeLink}>
                  TRY FOR FREE &gt;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
