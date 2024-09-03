import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useCapp } from "../../context/cappcontext";
import useStyles from "./stylesheet";

const imageList = [
  "/assets/banners/image1.png",
  "/assets/banners/image2.png",
  "/assets/banners/image3.jpg",
  "/assets/banners/image4.jpg",
  "/assets/banners/image5.png",
  "/assets/banners/image6.png",
];

export default function FilmList() {
  const { theme, currentTheme } = useCapp();
  const iconPath = theme === 'dark' ? `${process.env.PUBLIC_URL}/assets/dark-theme-icons` : `${process.env.PUBLIC_URL}/assets/light-theme-icons`;
  const classes = useStyles({ theme: currentTheme });
  const splideRef = useRef(null);

  return (
    <div className={classes.sliderContainer}>
      <h1 className={classes.title}>Vizyondakiler</h1>
      <div className={classes.slider}>
        <Splide
          ref={splideRef}
          options={{
            type: "loop", // Sonsuz döngü
            perPage: 3, // Her sayfada 3 fotoğraf
            perMove: 1,
            gap: "1rem",
            pagination: false, // Sayfalama yok
            arrows: true, // Ok butonları var
            autoplay: false, // Otomatik kaydırma kapalı
            interval: 0, // Otomatik kaydırma süresi, 0 = kapalı
            pauseOnHover: true, // Hoverda durması
            pauseOnFocus: true, // Focuslandığında durması
            drag: true, // Sürükleme özelliği açık
            rewind: false, // Rewind kapalı
            updateOnMove: true, // Hareket sırasında güncellemeler
            speed: 600, // Geçiş süresi (ms)
            easing: 'ease-in-out', // Geçiş efekti
            breakpoints: {
              1800: {
                perPage: 2, // Orta ekranlarda 2 fotoğraf
              },
              1200: {
                perPage: 1, // Küçük ekranlarda 1 fotoğraf
              },
            },
          }}
          aria-label="Film List"
        >
          {imageList.map((imgSrc, index) => (
            <SplideSlide key={index}>
              <div className={classes.sliderImageWrapper}>
                <img
                  src={imgSrc}
                  alt={`Slide ${index}`}
                  className={classes.sliderImage}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
        <button className={classes.prevButton} onClick={() => splideRef.current.go('<')}>
          &#10094;
        </button>
        <button className={classes.nextButton} onClick={() => splideRef.current.go('>')}>
          &#10095;
        </button>
      </div>
    </div>
  );
}
