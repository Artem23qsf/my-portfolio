import React from "react";
import heroPhoto from "../assets/artem.png";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container hero-container">

        {/* Ліва частина: текст */}
        <div className="hero-text">
          <h1 className="hero-title">Артем Варенюк</h1>

          <p className="hero-subtitle">
            Full-stack розробник сайтів
          </p>

          <ul className="hero-list">
            <li>Розробка сайтів під ключ</li>
            <li>Лендінги та корпоративні сайти</li>
            <li>Інтернет-магазини</li>
            <li>Адмін-панелі, CRM, API</li>
            <li>Оптимізація та прискорення сайтів</li>
          </ul>

          <a href="#order" className="hero-btn">
            Замовити розробку
          </a>
        </div>

        {/* Права частина: фото */}
        <div className="hero-photo">
          <img
            src={heroPhoto}
            alt="Артем Варенюк"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
