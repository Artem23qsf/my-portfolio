import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    return scrollY.onChange((current) => {
      if (current > lastScrollY && current > 120) {
        setHidden(true); // Скрол вниз → ховаємо
      } else {
        setHidden(false); // Скрол вгору → показуємо
      }
      setLastScrollY(current);
    });
  }, [lastScrollY, scrollY]);

  return (
    <motion.header
      className="fixed top-0 w-full bg-black text-white shadow-md z-50"
      animate={hidden ? { y: -120, opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="container">

        {/* ЛОГО */}
        <div className="logo">
          Web Industry
        </div>

        {/* МЕНЮ */}
        <nav>
          <ul>
            <li><a href="#hero">Головна</a></li>
            <li><a href="#portfolio">Роботи</a></li>
            <li><a href="#order">Замовити</a></li>
            <li><a href="#footer">Контакти</a></li>
          </ul>
        </nav>

      </div>
    </motion.header>
  );
};

export default Header;

