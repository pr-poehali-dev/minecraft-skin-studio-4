import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface NavbarProps {
  onOrderClick: () => void;
}

const Navbar = ({ onOrderClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Главная", href: "#hero" },
    { label: "О нас", href: "#about" },
    { label: "Услуги", href: "#services" },
    { label: "Отзывы", href: "#reviews" },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050805]/95 backdrop-blur-md border-b border-[#4ade80]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("#hero")}>
          <div className="w-9 h-9 relative mc-block rounded-sm overflow-hidden" style={{ background: "linear-gradient(135deg, #5a9e3a, #3d6e27)" }}>
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-px opacity-60">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className={`${i % 2 === 0 ? "bg-[#6ab845]" : "bg-[#4a8432]"}`} />
              ))}
            </div>
          </div>
          <span className="font-pixel text-[#4ade80] text-lg tracking-widest glow-text-green">
            SKIN<span className="text-white">CRAFT</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="nav-link text-[#c8ffc8]/80 hover:text-[#4ade80] transition-colors text-sm font-medium tracking-wider"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={onOrderClick}
            className="pixel-btn pixel-border bg-[#4ade80] text-[#050805] px-5 py-2 text-sm font-pixel tracking-widest rounded-sm hover:bg-[#22c55e] transition-colors"
          >
            ЗАКАЗАТЬ СКИН
          </button>
        </div>

        <button className="md:hidden text-[#4ade80]" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#050805]/98 border-t border-[#4ade80]/20 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-left text-[#c8ffc8]/80 hover:text-[#4ade80] transition-colors text-sm font-medium tracking-wider py-1"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => { onOrderClick(); setMenuOpen(false); }}
            className="pixel-btn pixel-border bg-[#4ade80] text-[#050805] px-5 py-2 text-sm font-pixel tracking-widest rounded-sm text-center"
          >
            ЗАКАЗАТЬ СКИН
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
