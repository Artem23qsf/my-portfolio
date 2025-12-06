import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="mt-24"> {/* Відступ зверху, щоб хедер не перекривав */}
        <Hero />
        <Portfolio />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
