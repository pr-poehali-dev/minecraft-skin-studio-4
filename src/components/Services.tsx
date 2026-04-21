import { useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";
import MinecraftSkin3D from "./MinecraftSkin3D";

const services = [
  {
    icon: "Paintbrush",
    title: "Базовый скин",
    price: "от 149 ₽",
    desc: "Простой кастомный скин по твоему описанию или референсу. Стандартный формат, все версии MC.",
    features: ["1 концепция", "PNG 64×64", "Срок 1-2 дня"],
    color: "#4ade80",
    skin: { head: "#f4a460", body: "#228b22", legs: "#1e3a5f", arms: "#228b22" },
  },
  {
    icon: "Star",
    title: "Про скин",
    price: "от 349 ₽",
    desc: "Детализированный скин с тенями, сложным дизайном одежды и 3D-эффектами.",
    features: ["3 концепции", "HD текстура", "Срок 2-3 дня", "1 правка бесплатно"],
    color: "#a855f7",
    skin: { head: "#d4a46a", body: "#7c3aed", legs: "#1e1b4b", arms: "#7c3aed" },
    featured: true,
  },
  {
    icon: "Crown",
    title: "Премиум скин",
    price: "от 699 ₽",
    desc: "Полностью уникальный скин с анимацией, спецэффектами и авторским стилем.",
    features: ["Без ограничений", "Анимированные эффекты", "Срок 3-5 дней", "3 правки"],
    color: "#f59e0b",
    skin: { head: "#f4c478", body: "#f59e0b", legs: "#374151", arms: "#f59e0b" },
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToOrder = () => {
    document.querySelector("#order")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" ref={sectionRef} className="py-24 relative pixel-grid">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="pixel-badge text-[#4ade80] mb-4 inline-block reveal">ПРАЙС-ЛИСТ</div>
          <h2 className="font-pixel text-4xl lg:text-5xl text-white mb-4 reveal">
            НАШИ <span className="text-[#4ade80] glow-text-green">УСЛУГИ</span>
          </h2>
          <p className="text-[#c8ffc8]/60 max-w-lg mx-auto reveal">
            Выбери подходящий пакет и получи скин, который сделает тебя легендой сервера
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`reveal skin-card relative rounded-sm p-6 flex flex-col ${
                svc.featured
                  ? "border-2 bg-[#0d1a0d]"
                  : "border border-[#4ade80]/20 bg-[#0a140a]"
              }`}
              style={{
                borderColor: svc.featured ? svc.color : undefined,
                boxShadow: svc.featured ? `0 0 40px ${svc.color}25` : undefined,
                animationDelay: `${i * 0.15}s`,
              }}
            >
              {svc.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 pixel-badge text-xs"
                  style={{ color: svc.color, borderColor: svc.color, background: "#050805" }}
                >
                  ★ ПОПУЛЯРНОЕ
                </div>
              )}

              {/* Mini skin preview */}
              <div className="flex justify-center mb-4">
                <MinecraftSkin3D colors={svc.skin} size={0.8} floating delay={i} />
              </div>

              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center mb-4 mc-block"
                style={{ background: `${svc.color}25`, border: `2px solid ${svc.color}50` }}
              >
                <Icon name={svc.icon} size={20} style={{ color: svc.color }} />
              </div>

              <h3 className="font-pixel text-lg text-white mb-1">{svc.title}</h3>
              <div className="font-pixel mb-3" style={{ color: svc.color, fontSize: "1.5rem" }}>
                {svc.price}
              </div>
              <p className="text-[#c8ffc8]/60 text-sm mb-4 flex-1">{svc.desc}</p>

              <ul className="space-y-2 mb-6">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#c8ffc8]/80">
                    <span style={{ color: svc.color }}>▸</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToOrder}
                className="pixel-btn w-full py-3 font-pixel text-xs tracking-widest rounded-sm transition-all"
                style={{
                  background: svc.featured ? svc.color : "transparent",
                  color: svc.featured ? "#050805" : svc.color,
                  border: `2px solid ${svc.color}`,
                }}
                onMouseEnter={(e) => {
                  if (!svc.featured) {
                    (e.currentTarget as HTMLButtonElement).style.background = `${svc.color}20`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!svc.featured) {
                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                  }
                }}
              >
                ВЫБРАТЬ
              </button>
            </div>
          ))}
        </div>

        {/* Extra services */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: "RefreshCw", title: "Редизайн скина", price: "от 99 ₽", desc: "Обновим твой старый скин" },
            { icon: "Users", title: "Парные скины", price: "от 499 ₽", desc: "Скины в одном стиле для двоих" },
            { icon: "Zap", title: "Срочный заказ", price: "+50%", desc: "Выполним за 12 часов" },
          ].map((extra) => (
            <div
              key={extra.title}
              className="reveal flex items-center gap-4 border border-[#4ade80]/15 bg-[#0a140a] rounded-sm p-4 hover:border-[#4ade80]/40 transition-colors"
            >
              <div className="w-10 h-10 flex-shrink-0 rounded-sm flex items-center justify-center bg-[#4ade80]/10">
                <Icon name={extra.icon} size={18} className="text-[#4ade80]" />
              </div>
              <div>
                <div className="font-pixel text-white text-sm">{extra.title}</div>
                <div className="text-[#4ade80] text-xs font-pixel">{extra.price}</div>
                <div className="text-[#c8ffc8]/50 text-xs">{extra.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;