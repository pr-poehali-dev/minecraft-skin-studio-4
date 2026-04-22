import { useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";
import MinecraftSkin3D from "./MinecraftSkin3D";

const services = [
  {
    icon: "Paintbrush",
    title: "Простой скин",
    price: "50 ₽",
    desc: "Базовый скин по твоему описанию. Простой образ, чистые цвета, без сложных деталей.",
    features: ["1 вариант", "PNG 64×64", "Срок 1 день"],
    color: "#4ade80",
    skin: { head: "#f4a460", body: "#228b22", legs: "#1e3a5f", arms: "#228b22" },
  },
  {
    icon: "Wand2",
    title: "Кастомный скин",
    price: "100 ₽",
    desc: "Полностью уникальный скин с деталями, тенями и твоим характером.",
    features: ["2 варианта", "Детальная прорисовка", "Срок 2 дня", "1 правка"],
    color: "#a855f7",
    skin: { head: "#d4a46a", body: "#7c3aed", legs: "#1e1b4b", arms: "#7c3aed" },
    featured: true,
  },
  {
    icon: "RefreshCw",
    title: "Ребрендинг",
    price: "60 ₽",
    desc: "Обновим твой старый скин: новые цвета, детали, свежий взгляд на твой образ.",
    features: ["На основе твоего", "Сохраним стиль", "Срок 1 день"],
    color: "#00d9ff",
    skin: { head: "#f4c478", body: "#0ea5e9", legs: "#0c4a6e", arms: "#0ea5e9" },
  },
  {
    icon: "Users",
    title: "Комплект скинов",
    price: "от 150 ₽",
    desc: "3 и более скинов в одном стиле — для команды, клана или друзей.",
    features: ["3+ скинов", "Единый стиль", "Скидка на каждый", "Срок 3-5 дней"],
    color: "#f59e0b",
    skin: { head: "#f4c478", body: "#f59e0b", legs: "#78350f", arms: "#f59e0b" },
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
              setTimeout(() => el.classList.add("visible"), i * 100);
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
            Выбери подходящий пакет — от простого скина до целого комплекта для команды
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`reveal skin-card relative rounded-sm p-5 flex flex-col ${
                svc.featured
                  ? "border-2 bg-[#0d1a0d]"
                  : "border border-[#4ade80]/20 bg-[#0a140a]"
              }`}
              style={{
                borderColor: svc.featured ? svc.color : undefined,
                boxShadow: svc.featured ? `0 0 40px ${svc.color}25` : undefined,
                animationDelay: `${i * 0.12}s`,
              }}
            >
              {svc.featured && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 pixel-badge text-xs whitespace-nowrap"
                  style={{ color: svc.color, borderColor: svc.color, background: "#050805" }}
                >
                  ★ ХИТ
                </div>
              )}

              <div className="flex justify-center mb-3">
                <MinecraftSkin3D colors={svc.skin} size={0.75} floating delay={i} />
              </div>

              <div
                className="w-9 h-9 rounded-sm flex items-center justify-center mb-3 mc-block"
                style={{ background: `${svc.color}20`, border: `2px solid ${svc.color}50` }}
              >
                <Icon name={svc.icon} size={18} style={{ color: svc.color }} />
              </div>

              <h3 className="font-pixel text-sm text-white mb-1">{svc.title}</h3>
              <div className="font-pixel mb-3" style={{ color: svc.color, fontSize: "1.4rem" }}>
                {svc.price}
              </div>
              <p className="text-[#c8ffc8]/55 text-xs mb-4 flex-1 leading-relaxed">{svc.desc}</p>

              <ul className="space-y-1.5 mb-5">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-[#c8ffc8]/75">
                    <span style={{ color: svc.color }}>▸</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToOrder}
                className="pixel-btn w-full py-2.5 font-pixel text-xs tracking-widest rounded-sm transition-all"
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
                ЗАКАЗАТЬ
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
