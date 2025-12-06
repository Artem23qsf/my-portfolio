import React, { useState } from "react";
import { motion } from "framer-motion";

const TOKEN = "8233056978:AAEJWyVxf2p9IH4M9la1azSjtD1DebGgzLs";
const CHAT_ID = "5552595136";

const OrderForm = () => {
  const [form, setForm] = useState({
    siteType: "",
    budget: "",
    currency: "UAH",
    deadline: "",
    techTask: "",
    contact: "",
    pdfFile: null
  });

  const handleChange = e => {
    const { id, value, files } = e.target;
    setForm(prev => ({ ...prev, [id]: files ? files[0] : value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const textMessage = `
📩 НОВА ЗАЯВКА НА РОЗРОБКУ

🖥 Тип сайту: ${form.siteType}
💰 Бюджет: ${form.budget} ${form.currency}
⏳ Терміни: ${form.deadline}

📘 Технічне завдання:
${form.techTask}

📞 Контакт: ${form.contact}
    `;

    await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text: textMessage })
    });

    if (form.pdfFile) {
      const fd = new FormData();
      fd.append("chat_id", CHAT_ID);
      fd.append("document", form.pdfFile);
      await fetch(`https://api.telegram.org/bot${TOKEN}/sendDocument`, {
        method: "POST",
        body: fd
      });
    }

    alert("Заявка відправлена! Я з вами скоро зв'яжусь.");
    setForm({ siteType:"", budget:"", currency:"UAH", deadline:"", techTask:"", contact:"", pdfFile:null });
  };

  return (
    <motion.section
      id="order"
      className="py-20 bg-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 max-w-xl">
        <h2 className="text-3xl font-bold text-green-500 text-center mb-10">
          Замовити розробку
        </h2>

        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6 bg-black p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/** Поля форми */}
          {[
            { id: "siteType", label: "Який сайт потрібно виконати?", type: "text", placeholder: "Наприклад: інтернет-магазин" },
            { id: "budget", label: "Бюджет", type: "number", placeholder: "5000" },
            { id: "deadline", label: "Терміни", type: "date" },
            { id: "techTask", label: "Технічне завдання (ТЗ)", type: "textarea", placeholder: "Опишіть ваші вимоги" },
            { id: "contact", label: "Ваш Telegram або телефон", type: "text", placeholder: "@username або +380..." }
          ].map(field => (
            <div key={field.id} className="w-full">
              <label className="block font-semibold mb-2">{field.label}</label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  value={form[field.id]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  rows="4"
                  className="w-full border border-green-500 focus:border-green-400 focus:ring-1 focus:ring-green-400 rounded-lg px-3 py-2 bg-gray-800 text-white transition"
                ></textarea>
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  value={form[field.id]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="w-full border border-green-500 focus:border-green-400 focus:ring-1 focus:ring-green-400 rounded-lg px-3 py-2 bg-gray-800 text-white transition"
                  required
                />
              )}
            </div>
          ))}

          {/** Поле для PDF */}
          <div>
            <label className="block font-semibold mb-2">Прикріпити ТЗ</label>
            <input
              type="file"
              id="pdfFile"
              onChange={handleChange}
              ccept=".pdf,.doc,.docx"
              className="text-white"
            />
          </div>

          {/** Кнопка Submit */}
          <motion.button
            type="submit"
            className="w-full bg-green-500 text-black py-3 rounded-lg font-semibold text-lg hover:bg-green-400 hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Відправити
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default OrderForm;

