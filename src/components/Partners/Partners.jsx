import React, { useState, useEffect } from "react";
import chrisRobinson from "../../assets/partners/reviews/chris-robinson.webp";
import daliborKruljac from "../../assets/partners/reviews/dalibor-kruljac.webp";
import justinModrak from "../../assets/partners/reviews/justin-modrak.webp";

import Card from "./Card";

import polaris from "../../assets/partners/logos/polaris.svg";
import gorillas from "../../assets/partners/logos/gorillas.svg";
import wolt from "../../assets/partners/logos/wolt.svg";
import marriott from "../../assets/partners/logos/marriott-intl.svg";
import merck from "../../assets/partners/logos/merck.svg";
import costco from "../../assets/partners/logos/costco.svg";
import saic from "../../assets/partners/logos/saic.svg";
import hilton from "../../assets/partners/logos/hilton.svg";
import group1 from "../../assets/partners/logos/group1-automotive.webp";
import lowes from "../../assets/partners/logos/lowes.svg";

const Partners = () => {
  const testimonials = [
    {
      image: justinModrak,
      quote: "Great support and easy to use!",
      name: "Michael Smith",
      designation: "Operations Head",
      organization: "Global Solutions",
    },
    {
      image: daliborKruljac,
      quote:
        "Most complete MDM solution I found, and I tested many of them, including major names",
      name: "Dalibor Kruljac",
      designation: "",
      organization: "KAMELEYA LTD",
    },
    {
      image: chrisRobinson,
      quote: "Hexnode is of great value. Works great with Android and iOS!",
      name: "Justin Modrak",
      designation: "Technology Coordinator",
      organization: "East Troy Community School District",
    },
  ];

  const logos = [
    polaris,
    gorillas,
    wolt,
    marriott,
    merck,
    costco,
    saic,
    hilton,
    group1,
    lowes,
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextSlide = () => {
    if (isAnimating || activeIndex === testimonials.length - 1) return;

    setIsAnimating(true);
    const nextIndex = (activeIndex + 1) % testimonials.length;
    setActiveIndex(nextIndex);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  const prevSlide = () => {
    if (isAnimating || activeIndex === 0) return;

    setIsAnimating(true);
    const prevIndex =
      (activeIndex - 1 + testimonials.length) % testimonials.length;
    setActiveIndex(prevIndex);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  const [position, setPosition] = useState(0);
  const [isLogoAnimating, setIsLogoAnimating] = useState(false);
  const logoItemWidth = 200;
  const totalLogosWidth = logoItemWidth * logos.length;

  useEffect(() => {
    const animationInterval = setInterval(() => {
      if (isLogoAnimating) return;

      setIsLogoAnimating(true);

      let startTime = null;
      const startPosition = position;
      let newPosition = position + logoItemWidth;

      if (newPosition >= totalLogosWidth) {
        newPosition = 0;
      }

      const animateFrame = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / 1000;

        if (progress < 1) {
          const currentPosition =
            startPosition + (newPosition - startPosition) * progress;
          setPosition(currentPosition);
          requestAnimationFrame(animateFrame);
        } else {
          setPosition(newPosition);

          setTimeout(() => {
            setIsLogoAnimating(false);
          }, 1000);
        }
      };

      requestAnimationFrame(animateFrame);
    }, 2000);

    return () => clearInterval(animationInterval);
  }, [position, isLogoAnimating, logoItemWidth, totalLogosWidth]);

  const styles = {
    fullWidthContainer: {
      width: "100vw",
      marginLeft: "calc(-50vw + 50%)",
      backgroundColor: "rgb(247, 247, 247)",
      padding: "60px 0",
      position: "relative",
      left: 0,
      right: 0,
    },
    container: {
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 20px",
      textAlign: "center",
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "60px",
      textAlign: "center",
      fontWeight: "700",
    },
    carouselOuterWrapper: {
      position: "relative",
      width: "100%",
      maxWidth: "1000px",
      margin: "0 auto 70px",
    },
    carouselWrapper: {
      position: "relative",
      width: "100%",
      display: "flex",
      alignItems: "center",
    },
    testimonialsViewport: {
      width: "100%",
      overflow: "hidden",
      flex: 1,
      borderRadius: "8px",
    },
    testimonialsContainer: {
      display: "flex",
      width: "100%",
    },
    testimonialCard: {
      flex: "0 0 100%",
      width: "100%",
    },
    carouselButton: {
      width: "40px",
      height: "40px",
      borderRadius: "8px",
      border: "2px solid #e0e0e0",
      backgroundColor: "white",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "18px",
      zIndex: 10,
      transition: "all 0.3s ease",
    },
    prevButton: {
      marginRight: "15px",
    },
    nextButton: {
      marginLeft: "15px",
    },
    disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
    },
    mobileNavButtons: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginTop: "20px",
    },
    logoCarouselContainer: {
      width: "100%",
      overflow: "hidden",
      marginTop: "50px",
      position: "relative",
    },
    logoCarouselTrack: {
      display: "flex",
      alignItems: "center",
      padding: "20px 0",
    },
    logoItem: {
      flex: "0 0 200px",
      height: "80px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 20px",
    },
    logoImage: {
      height: "60px",
      maxWidth: "180px",
      objectFit: "contain",
      opacity: "0.8",
      transition: "opacity 0.3s ease",
    },
    logoGradientLeft: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100px",
      height: "100%",
      background:
        "linear-gradient(to right, rgb(247, 247, 247), rgba(247, 247, 247, 0))",
      zIndex: 5,
      pointerEvents: "none",
    },
    logoGradientRight: {
      position: "absolute",
      top: 0,
      right: 0,
      width: "100px",
      height: "100%",
      background:
        "linear-gradient(to left, rgb(247, 247, 247), rgba(247, 247, 247, 0))",
      zIndex: 5,
      pointerEvents: "none",
    },
  };

  return (
    <section style={styles.fullWidthContainer}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Why should you choose Hexnode?</h2>

        <div style={styles.carouselOuterWrapper}>
          <div style={styles.carouselWrapper}>
            {!isMobileView && (
              <button
                onClick={prevSlide}
                style={{
                  ...styles.carouselButton,
                  ...styles.prevButton,
                  ...(activeIndex === 0 ? styles.disabled : {}),
                }}
                disabled={activeIndex === 0}
                aria-label="Previous testimonial"
              >
                &#10094;
              </button>
            )}

            <div style={styles.testimonialsViewport}>
              <div
                style={{
                  ...styles.testimonialsContainer,
                  transform: `translateX(-${activeIndex * 100}%)`,
                  transition: "transform 1s ease-in-out",
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} style={styles.testimonialCard}>
                    <Card
                      image={testimonial.image}
                      quote={testimonial.quote}
                      name={testimonial.name}
                      designation={testimonial.designation}
                      organization={testimonial.organization}
                    />
                  </div>
                ))}
              </div>
            </div>

            {!isMobileView && (
              <button
                onClick={nextSlide}
                style={{
                  ...styles.carouselButton,
                  ...styles.nextButton,
                  ...(activeIndex === testimonials.length - 1
                    ? styles.disabled
                    : {}),
                }}
                disabled={activeIndex === testimonials.length - 1}
                aria-label="Next testimonial"
              >
                &#10095;
              </button>
            )}
          </div>

          {isMobileView && (
            <div style={styles.mobileNavButtons}>
              <button
                onClick={prevSlide}
                style={{
                  ...styles.carouselButton,
                  ...(activeIndex === 0 ? styles.disabled : {}),
                }}
                disabled={activeIndex === 0}
                aria-label="Previous testimonial"
              >
                &#10094;
              </button>

              <button
                onClick={nextSlide}
                style={{
                  ...styles.carouselButton,
                  ...(activeIndex === testimonials.length - 1
                    ? styles.disabled
                    : {}),
                }}
                disabled={activeIndex === testimonials.length - 1}
                aria-label="Next testimonial"
              >
                &#10095;
              </button>
            </div>
          )}
        </div>

        <div style={styles.logoCarouselContainer}>
          <div
            style={{
              ...styles.logoCarouselTrack,
              transform: `translateX(-${position}px)`,
              transition: isLogoAnimating ? "transform 1s linear" : "none",
            }}
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div key={index} style={styles.logoItem}>
                <img
                  src={logo}
                  alt={`Partner Logo ${(index % logos.length) + 1}`}
                  style={styles.logoImage}
                />
              </div>
            ))}
          </div>

          <div style={styles.logoGradientLeft}></div>
          <div style={styles.logoGradientRight}></div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
