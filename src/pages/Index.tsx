import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import OrderForm from "@/components/OrderForm";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import AdminPanel from "@/components/AdminPanel";

const Index = () => {
  const [orderOpen, setOrderOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0f0a] text-[#e5ffe5]">
      <Navbar onOrderClick={() => setOrderOpen(true)} />
      <Hero onOrderClick={() => setOrderOpen(true)} />
      <About />
      <Services />
      <Reviews />
      <Footer onOrderClick={() => setOrderOpen(true)} onAdminClick={() => setAdminOpen(true)} />

      {/* Chat widget — fixed bottom right */}
      <ChatWidget onOrderClick={() => setOrderOpen(true)} />

      {/* Order form overlay */}
      {orderOpen && <OrderForm isPage onClose={() => setOrderOpen(false)} />}

      {/* Admin panel overlay */}
      {adminOpen && <AdminPanel onClose={() => setAdminOpen(false)} />}
    </div>
  );
};

export default Index;
