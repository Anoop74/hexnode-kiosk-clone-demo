import React, { useState, useEffect } from "react";

const Card = ({ image, quote, name, designation, organization }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="testimonial-card"
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "stretch",
        backgroundColor: "#FFFFFF",
        borderRadius: "20px",
        overflow: "hidden",
        maxWidth: isMobile ? "100%" : "1000px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div
        className="testimonial-image-container"
        style={{
          flexShrink: 0,
          width: isMobile ? "100%" : "290px",
          height: isMobile ? "250px" : "auto",
          position: "relative",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            margin: 0,
            padding: 0,
            display: "block",
          }}
          className="testimonial-image"
        />
      </div>

      <div
        className="testimonial-content"
        style={{
          display: "flex",
          flexDirection: "column",
          flex: "1",
          padding: "40px",
          textAlign: "left",
        }}
      >
        <p
          className="testimonial-quote"
          style={{
            fontSize: "24px",
            fontWeight: "600",
            lineHeight: "1.4",
            color: "#000000",
            marginBottom: "24px",
            fontStyle: "normal",
          }}
        >
          "{quote}"
        </p>

        <div
          className="testimonial-divider"
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#E0E0E0",
            margin: "24px 0",
          }}
        ></div>

        <h3
          className="testimonial-name"
          style={{
            fontSize: "22px",
            fontWeight: "700",
            margin: "0 0 8px 0",
            color: "#000000",
          }}
        >
          {name}
        </h3>

        {designation && (
          <p
            className="testimonial-designation"
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#666666",
              margin: "0 0 4px 0",
            }}
          >
            {designation}
          </p>
        )}

        <p
          className="testimonial-organization"
          style={{
            fontSize: "16px",
            color: "#666666",
            margin: "0",
            textTransform: "uppercase",
          }}
        >
          {organization}
        </p>
      </div>
    </div>
  );
};

export default Card;
