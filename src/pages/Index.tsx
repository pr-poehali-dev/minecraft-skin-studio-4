import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import OrderForm from "@/components/OrderForm";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0f0a] text-[#e5ffe5]">
      <Navbar onOrderClick={() => setOrderOpen(true)} />
      <Hero onOrderClick={() => setOrderOpen(true)} />
      <About />
      <Services />
      <Reviews />
      <Footer onOrderClick={() => setOrderOpen(true)} />

      {orderOpen && (
        <OrderForm isPage onClose={() => setOrderOpen(false)} />
      )}
    </div>
  );
};

export default Index;
