import { useEffect, useRef, useState } from "react";
import MinecraftSkin3D from "./MinecraftSkin3D";

const reviews = [
  {
    nick: "DarkWolf_MC",
    text: "Заказал премиум скин с тёмной тематикой — получил просто огонь! Все на сервере спрашивают где взял. Делали быстро, 3 дня всего.",
    rating: 5,
    skin: { head: "#c8a882", body: "#1a1a2e", legs: "#0f0f1a", arms: "#1a1a2e" },
    tag: "Премиум скин",
  },
  {
    nick: "PixelQueen",
    text: "Хотела скин в стиле аниме с розовыми волосами и катаной. Результат превзошёл все ожидания! Очень детализировано и красиво.",
    rating: 5,
    skin: { head: "#f4c478", body: "#ff6b9d", legs: "#2d1b4e", arms: "#ff6b9d" },
    tag: "Про скин",
  },
  {
    nick: "CraftMaster2099",
    text: "Взял базовый — цена огонь, качество хорошее. Простой средневековый рыцарь, всё чётко нарисовали. Буду брать ещё.",
    rating: 4,
    skin: { head: "#d4a46a", body: "#8a8a8a", legs: "#555", arms: "#8a8a8a" },
    tag: "Базовый скин",
  },
  {
    nick: "EnderGirl",
    text: "Парные скины для меня и друга — просто мечта! Сделали в фиолетовом стиле Края. Выглядим крутейшими на любом сервере.",
    rating: 5,
    skin: { head: "#c8a882", body: "#7c3aed", legs: "#3b0764", arms: "#7c3aed" },
    tag: "Парные скины",
  },
  {
    nick: "SkyWarsPro",
    text: "Срочный заказ перед турниром — сделали за 10 часов! Скин вышел на уровне, все соперники смотрели с завистью.",
    rating: 5,
    skin: { head: "#f4a460", body: "#0ea5e9", legs: "#0c4a6e", arms: "#0ea5e9" },
    tag: "Срочный заказ",
  },
  {
    nick: "BuilderSteve",
    text: "Уже третий скин заказываю. Каждый раз новая тематика — архитектор, пират, волшебник. Качество стабильное, рекомендую.",
    rating: 5,
    skin: { head: "#f4c478", body: "#f59e0b", legs: "#78350f", arms: "#f59e0b" },
    tag: "Постоянный клиент",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? "text-[#f59e0b]" : "text-[#4ade80]/20"}>
        ★
      </span>
    ))}
  </div>
);

const Reviews = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

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

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % reviews.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="reviews" ref={sectionRef} className="py-24 relative pixel-grid">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="pixel-badge text-[#4ade80] mb-4 inline-block reveal">ОТЗЫВЫ</div>
          <h2 className="font-pixel text-4xl lg:text-5xl text-white mb-4 reveal">
            ЧТО <span className="text-[#4ade80] glow-text-green">ГОВОРЯТ</span>
          </h2>
          <p className="text-[#c8ffc8]/60 max-w-lg mx-auto reveal">
            Более 200 довольных игроков уже щеголяют нашими скинами
          </p>
        </div>

        {/* Featured review */}
        <div className="reveal mb-8">
          <div
            className="relative border border-[#4ade80]/30 bg-[#0a140a] rounded-sm p-8 max-w-2xl mx-auto glow-green transition-all duration-500"
          >
            <div className="absolute -top-4 left-8 text-5xl text-[#4ade80] opacity-30 font-pixel">"</div>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <MinecraftSkin3D colors={reviews[active].skin} size={0.7} floating delay={0} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-pixel text-[#4ade80] text-sm">{reviews[active].nick}</span>
                  <span className="pixel-badge text-[#c8ffc8]/40 text-xs" style={{ borderColor: "#4ade80", color: "#4ade80" }}>
                    {reviews[active].tag}
                  </span>
                </div>
                <Stars count={reviews[active].rating} />
                <p className="text-[#c8ffc8]/80 mt-3 leading-relaxed">{reviews[active].text}</p>
              </div>
            </div>

            <div className="flex gap-2 mt-6 justify-center">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300 rounded-sm"
                  style={{
                    width: i === active ? "24px" : "8px",
                    height: "8px",
                    background: i === active ? "#4ade80" : "#4ade80",
                    opacity: i === active ? 1 : 0.25,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Grid reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((rev, i) => (
            <div
              key={rev.nick}
              className="reveal skin-card border border-[#4ade80]/15 bg-[#0a140a] rounded-sm p-4 cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => setActive(i)}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-sm overflow-hidden flex-shrink-0" style={{ background: rev.skin.head }}>
                  <div className="w-full h-full" style={{ background: `linear-gradient(135deg, ${rev.skin.head}, ${rev.skin.body})` }} />
                </div>
                <div>
                  <div className="font-pixel text-white text-xs">{rev.nick}</div>
                  <Stars count={rev.rating} />
                </div>
              </div>
              <p className="text-[#c8ffc8]/50 text-xs line-clamp-2">{rev.text}</p>
              <div className="mt-2">
                <span className="text-[#4ade80] text-xs opacity-60">{rev.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
