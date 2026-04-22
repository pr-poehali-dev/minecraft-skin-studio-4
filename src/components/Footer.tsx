interface FooterProps {
  onOrderClick: () => void;
  onAdminClick: () => void;
}

const Footer = ({ onOrderClick, onAdminClick }: FooterProps) => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[#4ade80]/15 bg-[#050805] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
          {/* Logo + desc */}
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("#hero")}>
              <div
                className="w-9 h-9 mc-block rounded-sm overflow-hidden flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #5a9e3a, #3d6e27)" }}
              >
                <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-px opacity-60">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className={i % 2 === 0 ? "bg-[#6ab845]" : "bg-[#4a8432]"} />
                  ))}
                </div>
              </div>
              <span className="font-pixel text-[#4ade80] text-lg tracking-widest glow-text-green">
                PIXEL<span className="text-white">FORGE</span>
              </span>
            </div>
            <p className="text-[#c8ffc8]/40 text-xs leading-relaxed">
              Студия уникальных скинов для Minecraft. Работаем с 2026 года. Ручная работа, низкие цены, быстрые сроки.
            </p>
            <button
              onClick={onAdminClick}
              className="text-left text-[#c8ffc8]/20 hover:text-[#4ade80]/50 transition-colors text-xs font-mono mt-1"
            >
              · войти в панель
            </button>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <div className="font-pixel text-[#4ade80]/60 text-xs tracking-widest mb-1">НАВИГАЦИЯ</div>
            {[
              { label: "Главная", href: "#hero" },
              { label: "О нас", href: "#about" },
              { label: "Услуги", href: "#services" },
              { label: "Отзывы", href: "#reviews" },
            ].map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="nav-link text-left text-[#c8ffc8]/50 hover:text-[#4ade80] transition-colors text-sm"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-3">
            <div className="font-pixel text-[#4ade80]/60 text-xs tracking-widest mb-1">КОНТАКТЫ</div>
            <a
              href="https://t.me/Xezze228"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#c8ffc8]/55 hover:text-[#4ade80] transition-colors text-sm group"
            >
              <div className="w-8 h-8 border border-[#4ade80]/25 rounded-sm flex items-center justify-center font-pixel text-xs group-hover:border-[#4ade80] transition-colors text-[#4ade80]/60 group-hover:text-[#4ade80]">
                TG
              </div>
              @Xezze228
            </a>
            <a
              href="https://discord.com/users/xezze228"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#c8ffc8]/55 hover:text-[#a855f7] transition-colors text-sm group"
            >
              <div className="w-8 h-8 border border-[#a855f7]/25 rounded-sm flex items-center justify-center font-pixel text-xs group-hover:border-[#a855f7] transition-colors text-[#a855f7]/60 group-hover:text-[#a855f7]">
                DS
              </div>
              @xezze228
            </a>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-3">
            <div className="font-pixel text-[#4ade80]/60 text-xs tracking-widest mb-1">ЗАКАЗАТЬ</div>
            <p className="text-[#c8ffc8]/40 text-xs">Скины от 50 ₽</p>
            <button
              onClick={onOrderClick}
              className="pixel-btn pixel-border bg-[#4ade80] text-[#050805] px-6 py-3 font-pixel tracking-widest text-xs rounded-sm hover:bg-[#22c55e] transition-colors"
            >
              ЗАКАЗАТЬ СКИН
            </button>
          </div>
        </div>

        <div className="border-t border-[#4ade80]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#c8ffc8]/20 text-xs font-mono">
            © 2026 PixelForge Studio · Сервер: <span className="text-[#4ade80]/40">CreeperDrop.ru</span>
          </p>
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
            <span className="text-[#4ade80]/50 text-xs font-mono">Онлайн · Принимаем заказы</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
