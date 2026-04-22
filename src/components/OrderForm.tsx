import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";

const productOptions = [
  { value: "simple", label: "Простой скин — 50 ₽" },
  { value: "custom", label: "Кастомный скин — 100 ₽" },
  { value: "rebrand", label: "Ребрендинг — 60 ₽" },
  { value: "pack", label: "Комплект скинов (3+) — от 150 ₽" },
];

const deadlineOptions = [
  { value: "standard", label: "Стандартно" },
  { value: "fast", label: "До 24 часов (+20%)" },
  { value: "super", label: "До 12 часов (+50%)" },
];

interface OrderFormProps {
  onClose?: () => void;
  isPage?: boolean;
}

const OrderForm = ({ onClose, isPage = false }: OrderFormProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    nick: "",
    product: "",
    description: "",
    deadline: "standard",
    tg: "",
    ds: "",
    vk: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isPage) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isPage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const formBody = (
    <>
      {submitted ? (
        <div className="text-center py-14 pixel-border rounded-sm bg-[#0a140a]">
          <div className="text-5xl mb-4">⛏️</div>
          <h3 className="font-pixel text-xl text-[#4ade80] glow-text-green mb-3">ЗАКАЗ ПРИНЯТ!</h3>
          <p className="text-[#c8ffc8]/70 mb-6 text-sm px-4">
            Свяжемся с тобой в ближайшее время. Твой скин скоро станет реальностью!
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setForm({ nick: "", product: "", description: "", deadline: "standard", tg: "", ds: "", vk: "" });
              onClose?.();
            }}
            className="pixel-btn pixel-border text-[#4ade80] px-6 py-3 font-pixel text-xs tracking-widest rounded-sm hover:bg-[#4ade80]/10 transition-colors"
          >
            НОВЫЙ ЗАКАЗ
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-[#0a140a] border border-[#4ade80]/20 rounded-sm p-6 md:p-8 space-y-5"
        >
          {/* Nick */}
          <div>
            <label className="block text-[#4ade80] font-pixel text-xs tracking-widest mb-2">НИК / ИМЯ *</label>
            <input
              required
              value={form.nick}
              onChange={(e) => setForm({ ...form, nick: e.target.value })}
              placeholder="Steve_Pro"
              className="w-full bg-[#050805] border border-[#4ade80]/25 text-[#c8ffc8] px-4 py-3 rounded-sm focus:outline-none focus:border-[#4ade80] transition-colors placeholder-[#4ade80]/25 font-mono text-sm"
            />
          </div>

          {/* Product */}
          <div>
            <label className="block text-[#4ade80] font-pixel text-xs tracking-widest mb-2">ВЫБОР ТОВАРА *</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {productOptions.map((p) => (
                <button
                  type="button"
                  key={p.value}
                  onClick={() => setForm({ ...form, product: p.value })}
                  className="pixel-btn text-left px-4 py-3 rounded-sm transition-all border-2 text-sm"
                  style={{
                    background: form.product === p.value ? "#4ade8025" : "transparent",
                    color: form.product === p.value ? "#4ade80" : "#c8ffc8",
                    borderColor: form.product === p.value ? "#4ade80" : "#4ade8035",
                  }}
                >
                  <span className="mr-2 text-[#4ade80]">{form.product === p.value ? "▶" : "▷"}</span>
                  {p.label}
                </button>
              ))}
            </div>
            {!form.product && (
              <input type="text" required value={form.product} className="opacity-0 h-0 w-0 absolute" readOnly tabIndex={-1} />
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-[#4ade80] font-pixel text-xs tracking-widest mb-2">ОПИСАНИЕ СКИНА *</label>
            <textarea
              required
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              placeholder="Опиши внешний вид: цвета, одежда, аксессуары, персонаж, идея..."
              rows={4}
              className="w-full bg-[#050805] border border-[#4ade80]/25 text-[#c8ffc8] px-4 py-3 rounded-sm focus:outline-none focus:border-[#4ade80] transition-colors placeholder-[#4ade80]/25 font-mono resize-none text-sm"
            />
          </div>

          {/* Deadline */}
          <div>
            <label className="block text-[#4ade80] font-pixel text-xs tracking-widest mb-2">СРОКИ</label>
            <div className="flex flex-col sm:flex-row gap-2">
              {deadlineOptions.map((d) => (
                <button
                  type="button"
                  key={d.value}
                  onClick={() => setForm({ ...form, deadline: d.value })}
                  className="pixel-btn flex-1 px-3 py-2.5 font-pixel text-xs tracking-widest rounded-sm transition-all border-2"
                  style={{
                    background: form.deadline === d.value ? "#4ade80" : "transparent",
                    color: form.deadline === d.value ? "#050805" : "#4ade80",
                    borderColor: "#4ade80",
                    opacity: form.deadline === d.value ? 1 : 0.45,
                  }}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <label className="block text-[#4ade80] font-pixel text-xs tracking-widest mb-2">
              КАК СВЯЗАТЬСЯ <span className="text-[#c8ffc8]/40 font-mono normal-case">(хотя бы одно)</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4ade80]/50 text-xs font-mono">TG</span>
                <input
                  value={form.tg}
                  onChange={(e) => setForm({ ...form, tg: e.target.value })}
                  placeholder="@username"
                  className="w-full bg-[#050805] border border-[#4ade80]/25 text-[#c8ffc8] pl-9 pr-3 py-3 rounded-sm focus:outline-none focus:border-[#4ade80] transition-colors placeholder-[#4ade80]/25 font-mono text-sm"
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a855f7]/50 text-xs font-mono">DS</span>
                <input
                  value={form.ds}
                  onChange={(e) => setForm({ ...form, ds: e.target.value })}
                  placeholder="user#0000"
                  className="w-full bg-[#050805] border border-[#a855f7]/25 text-[#c8ffc8] pl-9 pr-3 py-3 rounded-sm focus:outline-none focus:border-[#a855f7] transition-colors placeholder-[#a855f7]/25 font-mono text-sm"
                />
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00d9ff]/50 text-xs font-mono">VK</span>
                <input
                  value={form.vk}
                  onChange={(e) => setForm({ ...form, vk: e.target.value })}
                  placeholder="vk.com/id"
                  className="w-full bg-[#050805] border border-[#00d9ff]/25 text-[#c8ffc8] pl-9 pr-3 py-3 rounded-sm focus:outline-none focus:border-[#00d9ff] transition-colors placeholder-[#00d9ff]/25 font-mono text-sm"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="pixel-btn border-2 border-[#4ade80]/25 text-[#c8ffc8]/50 px-6 py-3 font-pixel text-xs tracking-widest rounded-sm hover:border-[#4ade80]/50 transition-colors"
              >
                НАЗАД
              </button>
            )}
            <button
              type="submit"
              className="pixel-btn pixel-border flex-1 bg-[#4ade80] text-[#050805] py-4 font-pixel tracking-widest text-sm rounded-sm hover:bg-[#22c55e] transition-colors animate-pulse-green flex items-center justify-center gap-2"
            >
              <Icon name="Send" size={15} />
              ОТПРАВИТЬ ЗАКАЗ
            </button>
          </div>

          <p className="text-center text-[#c8ffc8]/25 text-xs">
            Ответим в течение 2 часов · Оплата после согласования
          </p>
        </form>
      )}
    </>
  );

  if (isPage) {
    return (
      <div className="fixed inset-0 z-50 bg-[#0a0f0a] overflow-y-auto">
        <div className="min-h-screen pixel-grid flex flex-col">
          <div className="sticky top-0 z-10 bg-[#050805]/95 backdrop-blur-md border-b border-[#4ade80]/20 px-6 py-4 flex items-center justify-between">
            <span className="font-pixel text-[#4ade80] tracking-widest text-lg">
              SKIN<span className="text-white">CRAFT</span>
            </span>
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-[#c8ffc8]/50 hover:text-[#4ade80] transition-colors"
            >
              <Icon name="ArrowLeft" size={16} />
              <span className="font-pixel text-xs tracking-widest">НАЗАД</span>
            </button>
          </div>

          <div className="flex-1 max-w-3xl mx-auto w-full px-6 py-10">
            <div className="text-center mb-8">
              <div className="pixel-badge text-[#4ade80] mb-4 inline-block">ФОРМА ЗАКАЗА</div>
              <h1 className="font-pixel text-3xl lg:text-4xl text-white mb-3">
                ОФОРМИТЬ <span className="text-[#4ade80] glow-text-green">ЗАКАЗ</span>
              </h1>
              <p className="text-[#c8ffc8]/55 text-sm">Заполни форму — свяжемся в течение 2 часов</p>
            </div>
            {formBody}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="order" ref={sectionRef} className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ade80]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ade80]/30 to-transparent" />
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="pixel-badge text-[#4ade80] mb-4 inline-block reveal">ФОРМА ЗАКАЗА</div>
          <h2 className="font-pixel text-3xl lg:text-4xl text-white mb-3 reveal">
            ОФОРМИТЬ <span className="text-[#4ade80] glow-text-green">ЗАКАЗ</span>
          </h2>
          <p className="text-[#c8ffc8]/55 reveal text-sm">Заполни форму — мы свяжемся в течение 2 часов</p>
        </div>
        {formBody}
      </div>
    </section>
  );
};

export default OrderForm;
