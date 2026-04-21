const Footer = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[#4ade80]/15 bg-[#050805] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("#hero")}>
            <div
              className="w-9 h-9 mc-block rounded-sm overflow-hidden"
              style={{ background: "linear-gradient(135deg, #5a9e3a, #3d6e27)" }}
            >
              <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-px opacity-60">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className={`${i % 2 === 0 ? "bg-[#6ab845]" : "bg-[#4a8432]"}`} />
                ))}
              </div>
            </div>
            <span className="font-pixel text-[#4ade80] text-lg tracking-widest glow-text-green">
              SKIN<span className="text-white">CRAFT</span>
            </span>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-6 justify-center">
            {[
              { label: "Главная", href: "#hero" },
              { label: "Услуги", href: "#services" },
              { label: "Заказать", href: "#order" },
              { label: "Отзывы", href: "#reviews" },
            ].map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="nav-link text-[#c8ffc8]/50 hover:text-[#4ade80] transition-colors text-sm"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {["TG", "VK", "DS"].map((s) => (
              <div
                key={s}
                className="w-9 h-9 border border-[#4ade80]/25 rounded-sm flex items-center justify-center text-[#4ade80]/50 hover:border-[#4ade80] hover:text-[#4ade80] transition-colors cursor-pointer font-pixel text-xs"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[#4ade80]/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#c8ffc8]/25 text-xs font-mono">
            © 2024 SkinCraft Studio · Все права защищены
          </p>
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
            <span className="text-[#4ade80]/60 text-xs font-mono">Онлайн · Принимаем заказы</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
