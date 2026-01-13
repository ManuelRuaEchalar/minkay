import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Fundación MINK'AY",
      subtitle: "Reduciendo la pobreza con soluciones sostenibles e innovadoras",
      buttonText: "Apoyanos",
      buttonLink: "#donaciones"
    },
    {
      title: "Seguridad Alimentaria",
      subtitle: "Acceso a alimentos nutritivos para comunidades vulnerables",
      buttonText: "Conoce Más",
      buttonLink: "#areas"
    },
    {
      title: "Hidroponía Sostenible",
      subtitle: "Tecnología innovadora para optimizar el uso del agua",
      buttonText: "Ver Proyectos",
      buttonLink: "#areas"
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
            background: index === 0 ? 'linear-gradient(135deg, #537A5A, #84714F)' :
                      index === 1 ? 'linear-gradient(135deg, #84714F, #537A5A)' :
                      'linear-gradient(135deg, #537A5A, #3A5740)'
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