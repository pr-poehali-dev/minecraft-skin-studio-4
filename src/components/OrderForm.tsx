import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";

const skinTypes = ["Базовый", "Про", "Премиум"];
const styles = ["Фэнтези", "Киберпанк", "Аниме", "Реализм", "Мультяшный", "Тёмный", "Пиратский", "Космос"];

const OrderForm = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    skinType: "Про",
    style: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="order" ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ade80]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ade80]/30 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="pixel-badge text-[#4ade80] mb-4 inline-block reveal">ФОРМА ЗАКАЗА</div>
          <h2 className="font-pixel text-4xl lg:text-5xl text-white mb-4 reveal">
            ЗАКАЗАТЬ <span className="text-[#4ade80] glow-text-green">СКИН</span>
          </h2>
          <p className="text-[#c8ffc8]/60 max-w-lg mx-auto reveal">
            Опиши свой идеальный скин — мы воплотим его в пикселях
          </p>
        </div>

        {submitted ? (
          <div className="reveal visible text-center py-16 pixel-border rounded-sm bg-[#0a140a]">
            <div className="text-6xl mb-4">⛏</div>
            <h3 className="font-pixel text-2xl text-[#4ade80] glow-text-green mb-3">ЗАКАЗ ПРИНЯТ!</h3>
            <p className="text-[#c8ffc8]/70 mb-6">
              Свяжемся с тобой в течение 2 часов. Скоро твой скин станет реальностью!
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="pixel-btn pixel-border text-[#4ade80] px-6 py-3 font-pixel text-xs tracking-widest rounded-sm hover:bg-[#4ade80]/10 transition-colors"
            >
              НОВЫЙ ЗАКАЗ
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal bg-[#0a140a] border border-[#4ade80]/20 rounded-sm p-8 space-y-6"
          >
            {/* Name + Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#4ade80] font-pixel text-xs tracking-widest mb-2">
                  ИМЯ / НИК *
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Steve_Pro"
                  className="w-full bg-[#050805] border border-[#4ade80]/25 text-[#c8ffc8] px-4 py-3 rounded-sm focus:outline-none focus:border-[#4ade80] transition-colors placeholder-[#4ade80]/25 font-mono"
                />
              </div>
              <div>
                <label className="block text-[#4ade80] font-pixel text-xs tracking-widest mb-2">
                  TELEGRAM / VK *
                </label>
                <input
                  required
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  placeholder="@username"
                  className="w-full bg-[#050805] border border-[#4ade80]/25 text-[#c8ffc8] px-4 py-3 rounded-sm focus:outline-none focus:border-[#4ade80] transition-colors placeholder-[#4ade80]/25 font-mono"
                />
              </div>
            </div>

            {/* Skin type */}
            <div>
              <label className="block text-[#4ade80] font-pixel text-xs tracking-widest mb-3">
                ТИП СКИНА *
              </label>
              <div className="flex flex-wrap gap-3">
                {skinTypes.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setForm({ ...form, skinType: t })}
                    className="pixel-btn px-5 py-2 font-pixel text-xs tracking-widest rounded-sm transition-all border-2"
                    style={{
                      background: form.skinType === t ? "#4ade80" : "transparent",
                      color: form.skinType === t ? "#050805" : "#4ade80",
                      borderColor: "#4ade80",
                    }}
                  >
                    {t.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Style */}
            <div>
              <label className="block text-[#4ade80] font-pixel text-xs tracking-widest mb-3">
                СТИЛЬ
              </label>
              <div className="flex flex-wrap gap-2">
                {styles.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setForm({ ...form, style: form.style === s ? "" : s })}
                    className="px-4 py-1.5 text-sm rounded-sm transition-all border"
                    style={{
                      background: form.style === s ? "#4ade80]/20" : "transparent",
                      color: form.style === s ? "#4ade80" : "#c8ffc8",
                      borderColor: form.style === s ? "#4ade80" : "#4ade80",
                      opacity: form.style === s ? 1 : 0.4,
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-[#4ade80] font-pixel text-xs tracking-widest mb-2">
                ОПИСАНИЕ СКИНА *
              </label>
              <textarea
                required
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Опиши внешний вид: цвета, одежда, аксессуары, персонаж или идея..."
                rows={4}
                className="w-full bg-[#050805] border border-[#4ade80]/25 text-[#c8ffc8] px-4 py-3 rounded-sm focus:outline-none focus:border-[#4ade80] transition-colors placeholder-[#4ade80]/25 font-mono resize-none"
              />
            </div>

            <button
              type="submit"
              className="pixel-btn pixel-border w-full bg-[#4ade80] text-[#050805] py-4 font-pixel tracking-widest text-sm rounded-sm hover:bg-[#22c55e] transition-colors animate-pulse-green flex items-center justify-center gap-3"
            >
              <Icon name="Send" size={16} />
              ОТПРАВИТЬ ЗАКАЗ
            </button>

            <p className="text-center text-[#c8ffc8]/30 text-xs">
              Ответим в течение 2 часов · Оплата после согласования
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default OrderForm;
