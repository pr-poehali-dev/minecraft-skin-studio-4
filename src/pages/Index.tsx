import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import OrderForm from "@/components/OrderForm";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0f0a] text-[#e5ffe5]">
      <Navbar />
      <Hero />
      <Services />
      <OrderForm />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
