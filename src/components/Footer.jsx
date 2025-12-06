import React from "react";
import telegramIcon from "../assets/icons/telegram.png";
import freelanceIcon from "../assets/icons/freelance.png";
import fiverrIcon from "../assets/icons/fiverr.png";

const Footer = () => {
  const socialLinks = [
    { href: "https://t.me/Samurai_night", icon: telegramIcon, alt: "Telegram" },
    { href: "https://freelancehunt.com/freelancer/artem_varenyuk.html ", icon: freelanceIcon, alt: "Freelancehunt" },
    { href: "https://www.fiverr.com/samuraimain", icon: fiverrIcon, alt: "Fiverr" },
  ];

  return (
     <section id="footer">
    <footer className="footer relative overflow-hidden">
      {/* SVG Хвиля зверху */}
      <svg
        className="absolute top-0 left-0 w-full h-10"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z"
          fill="#111"  /* чорна хвиля */
        />
      </svg>

      <div className="footer-content container mx-auto px-6 relative z-10">
        <div className="footer-flex">
          {/* Ліва частина з іконками */}
          <div className="footer-left">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={link.icon} alt={link.alt} />
              </a>
            ))}
          </div>

          {/* Права частина з текстом */}
          <div className="footer-right">Start acting today, not tomorrow.</div>
        </div>
      </div>
      
    </footer>
    </section>
  );
};

export default Footer;


