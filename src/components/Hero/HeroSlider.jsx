import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Fundación MINK'AY",
      subtitle: "Reduciendo la pobreza con soluciones sostenibles e innovadoras",
      buttonText: "Apoyanos",
      buttonLink: "#donaciones",
      image: process.env.PUBLIC_URL + "/images/fundacionminkay.jpeg"
    },
    {
      title: "Seguridad Alimentaria",
      subtitle: "Acceso a alimentos nutritivos para comunidades vulnerables",
      buttonText: "Conoce Más",
      buttonLink: "#areas",
      image: process.env.PUBLIC_URL + "/images/seguridadAlimentariaimg.jpg"
    },
    {
      title: "Hidroponía Sostenible",
      subtitle: "Tecnología innovadora para optimizar el uso del agua",
      buttonText: "Ver Proyectos",
      buttonLink: "#areas",
      image: process.env.PUBLIC_URL + "/images/hidroponia.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ 
            backgroundImage: `linear-gradient(rgba(83, 122, 90, 0.7), rgba(132, 113, 79, 0.7)), url(${slide.image})`,
            // IMPORTANTE: Esto ajusta la imagen para cubrir el área
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="slide-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <a href={slide.buttonLink} className="btn">
              {slide.buttonText}
            </a>
          </div>
        </div>
      ))}
      
      <div className="slider-nav">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;