import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Лендінг для компанії",
    description: "Сучасний сайт з анімаціями та адаптивом.",
    price: "від 5000 грн",
    link: "https://example1.com",
    img: "https://via.placeholder.com/400x250.png?text=Landing+Page"
  },
  {
    title: "Інтернет-магазин",
    description: "Повний функціонал з каталогом та кошиком.",
    price: "від 15000 грн",
    link: "https://example2.com",
    img: "https://via.placeholder.com/400x250.png?text=E-commerce"
  },
  {
    title: "Корпоративний сайт",
    description: "Багатосторінковий сайт із CMS.",
    price: "від 2000 грн / за сторінку",
    link: "https://example3.com",
    img: "https://via.placeholder.com/400x250.png?text=Corporate+Site"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-green-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Роботи
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transform transition duration-300"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 * idx, duration: 0.6 }}
            >
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-56 object-cover rounded-t-2xl"
                />
              </a>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-green-500">{proj.title}</h3>
                <p className="text-gray-300 mb-2">{proj.description}</p>
                <p className="text-green-500 font-bold mb-4">Ціна: {proj.price}</p>
                <a
                  href="#order"
                  className="inline-block text-black bg-green-500 px-4 py-2 rounded-lg font-semibold hover:bg-green-400 transition transform hover:scale-105"
                >
                  Замовити
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
