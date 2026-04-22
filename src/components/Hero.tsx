import MinecraftSkin3D from "./MinecraftSkin3D";

interface HeroProps {
  onOrderClick: () => void;
}

const Hero = ({ onOrderClick }: HeroProps) => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pixel-grid"
    >
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-8 opacity-20 animate-block-1">
          <div className="w-10 h-10 mc-block" style={{ background: "#5a9e3a", boxShadow: "inset -3px -3px 0 rgba(0,0,0,0.4)" }} />
        </div>
        <div className="absolute top-1/3 right-12 opacity-15 animate-block-2">
          <div className="w-8 h-8 mc-block" style={{ background: "#8b5e3c", boxShadow: "inset -2px -2px 0 rgba(0,0,0,0.4)" }} />
        </div>
        <div className="absolute bottom-40 left-1/4 opacity-10 animate-block-3">
          <div className="w-12 h-12 mc-block" style={{ background: "#8a8a8a", boxShadow: "inset -3px -3px 0 rgba(0,0,0,0.4)" }} />
        </div>
        <div className="absolute top-1/2 left-1/3 opacity-10 animate-float-slow">
          <div className="w-6 h-6 mc-block" style={{ background: "#00d9ff", boxShadow: "inset -2px -2px 0 rgba(0,0,0,0.4)" }} />
        </div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-5" style={{ background: "radial-gradient(circle, #4ade80, transparent)" }} />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-5" style={{ background: "radial-gradient(circle, #00d9ff, transparent)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-12 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="pixel-badge text-[#4ade80] mb-6 inline-block animate-fade-in">
              ✦ PixelForge · Студия скинов Minecraft · с 2026 года ✦
            </div>

            <h1 className="font-pixel text-5xl lg:text-7xl leading-tight mb-6 animate-slide-up">
              <span className="text-white">ТВОЙ</span>
              <br />
              <span className="text-[#4ade80] glow-text-green">УНИКАЛЬНЫЙ</span>
              <br />
              <span className="text-white">СКИН</span>
            </h1>

            <p className="text-[#c8ffc8]/70 text-lg mb-8 max-w-xl animate-slide-up stagger-2">
              Создаём кастомные скины для Minecraft вручную. От 50 ₽. Каждый скин — пиксельное произведение искусства, сделанное специально для тебя.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up stagger-3">
              <button
                onClick={onOrderClick}
                className="pixel-btn pixel-border bg-[#4ade80] text-[#050805] px-8 py-4 font-pixel tracking-widest text-sm rounded-sm hover:bg-[#22c55e] transition-colors animate-pulse-green"
              >
                ЗАКАЗАТЬ СКИН
              </button>
              <button
                onClick={() => scrollTo("#services")}
                className="pixel-btn border-2 border-[#4ade80]/40 text-[#4ade80] px-8 py-4 font-pixel tracking-widest text-sm rounded-sm hover:border-[#4ade80] hover:bg-[#4ade80]/10 transition-all"
              >
                ЦЕНЫ
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 justify-center lg:justify-start animate-slide-up stagger-4">
              {[
                { num: "100+", label: "Скинов создано" },
                { num: "от 50₽", label: "Цена за скин" },
                { num: "2026", label: "Год основания" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="font-pixel text-xl text-[#4ade80] glow-text-green">{s.num}</div>
                  <div className="text-[#c8ffc8]/50 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Skins */}
          <div className="flex-1 flex items-end justify-center gap-6 lg:gap-10">
            <div className="flex flex-col items-center gap-2">
              <MinecraftSkin3D
                colors={{ head: "#f4c478", body: "#7c3aed", legs: "#1e3a5f", arms: "#7c3aed" }}
                size={1.4}
                floating
                delay={0}
              />
              <span className="text-[#c8ffc8]/40 text-xs font-pixel">WIZARD</span>
            </div>
            <div className="flex flex-col items-center gap-2 mb-8">
              <MinecraftSkin3D
                colors={{ head: "#f4c478", body: "#4ade80", legs: "#1e40af", arms: "#4ade80" }}
                size={1.8}
                floating
                delay={1}
              />
              <span className="text-[#4ade80] text-xs font-pixel glow-text-green">HERO</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MinecraftSkin3D
                colors={{ head: "#d4a46a", body: "#ef4444", legs: "#374151", arms: "#ef4444" }}
                size={1.4}
                floating
                delay={2}
              />
              <span className="text-[#c8ffc8]/40 text-xs font-pixel">KNIGHT</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(transparent, #0a0f0a)" }} />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-60">
        <div className="w-px h-8 bg-[#4ade80]/50" />
        <div className="w-2 h-2 rounded-full bg-[#4ade80]" />
      </div>
    </section>
  );
};

export default Hero;