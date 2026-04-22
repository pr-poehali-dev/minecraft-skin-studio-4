import { useEffect, useRef, useState } from "react";
import MinecraftSkin3D from "./MinecraftSkin3D";

const reviews = [
  {
    nick: "DarkWolf_MC",
    text: "Заказал кастомный скин с тёмной тематикой — получил просто огонь! Все на сервере спрашивают где взял. Виктор красавчик!",
    rating: 5,
    skin: { head: "#c8a882", body: "#1a1a2e", legs: "#0f0f1a", arms: "#1a1a2e" },
    product: "Кастомный скин",
    price: "100 ₽",
  },
  {
    nick: "PixelQueen",
    text: "Хотела скин в стиле аниме с розовыми волосами. Результат превзошёл ожидания! Очень детально и быстро, за день сделали.",
    rating: 5,
    skin: { head: "#f4c478", body: "#ff6b9d", legs: "#2d1b4e", arms: "#ff6b9d" },
    product: "Кастомный скин",
    price: "100 ₽",
  },
  {
    nick: "CraftMaster99",
    text: "Взял простой скин — цена огонь за качество. Средневековый рыцарь, всё чётко нарисовали. Буду брать ещё.",
    rating: 4,
    skin: { head: "#d4a46a", body: "#8a8a8a", legs: "#555", arms: "#8a8a8a" },
    product: "Простой скин",
    price: "50 ₽",
  },
  {
    nick: "EnderGirl",
    text: "Ребрендинг старого скина — как будто новый персонаж! Сохранили мой стиль но сделали круче. Недорого и качественно.",
    rating: 5,
    skin: { head: "#c8a882", body: "#7c3aed", legs: "#3b0764", arms: "#7c3aed" },
    product: "Ребрендинг",
    price: "60 ₽",
  },
  {
    nick: "ClanLeader",
    text: "Заказал комплект на 5 человек для клана. Все в одном стиле — выглядим как настоящая команда. Виктор сделал быстро!",
    rating: 5,
    skin: { head: "#f4a460", body: "#0ea5e9", legs: "#0c4a6e", arms: "#0ea5e9" },
    product: "Комплект скинов",
    price: "от 150 ₽",
  },
  {
    nick: "BuilderSteve",
    text: "Уже третий скин заказываю. Каждый раз новая тематика — каждый раз доволен. Стабильное качество, рекомендую всем!",
    rating: 5,
    skin: { head: "#f4c478", body: "#f59e0b", legs: "#78350f", arms: "#f59e0b" },
    product: "Кастомный скин",
    price: "100 ₽",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} style={{ color: i < count ? "#f59e0b" : "rgba(74,222,128,0.2)" }}>★</span>
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
    const t = setInterval(() => setActive((a) => (a + 1) % reviews.length), 4500);
    return () => clearInterval(t);
  }, []);

  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section id="reviews" ref={sectionRef} className="py-24 relative pixel-grid">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="pixel-badge text-[#4ade80] mb-4 inline-block reveal">ОТЗЫВЫ КЛИЕНТОВ</div>
          <h2 className="font-pixel text-4xl lg:text-5xl text-white mb-4 reveal">
            ЧТО <span className="text-[#4ade80] glow-text-green">ГОВОРЯТ</span>
          </h2>

          {/* Rating summary */}
          <div className="reveal flex items-center justify-center gap-6 mt-6 mb-2">
            <div className="text-center">
              <div className="font-pixel text-5xl text-[#f59e0b] glow-text-green">{avgRating}</div>
              <Stars count={5} />
              <div className="text-[#c8ffc8]/45 text-xs mt-1">средний рейтинг</div>
            </div>
            <div className="w-px h-16 bg-[#4ade80]/20" />
            <div className="text-center">
              <div className="font-pixel text-3xl text-[#4ade80]">{reviews.length}</div>
              <div className="text-[#c8ffc8]/45 text-xs mt-1">отзывов</div>
            </div>
            <div className="w-px h-16 bg-[#4ade80]/20" />
            <div className="text-center">
              <div className="font-pixel text-3xl text-[#4ade80]">100%</div>
              <div className="text-[#c8ffc8]/45 text-xs mt-1">рекомендуют</div>
            </div>
          </div>
        </div>

        {/* Featured review */}
        <div className="reveal mb-8">
          <div className="relative border border-[#4ade80]/30 bg-[#0a140a] rounded-sm p-8 max-w-2xl mx-auto glow-green">
            <div className="absolute -top-3 -left-1 text-5xl text-[#4ade80]/20 font-pixel select-none">"</div>

            <div className="flex items-start gap-5">
              <div className="flex-shrink-0">
                <MinecraftSkin3D colors={reviews[active].skin} size={0.7} floating delay={0} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="font-pixel text-[#4ade80] text-sm">{reviews[active].nick}</span>
                  <span
                    className="pixel-badge text-xs"
                    style={{ color: "#4ade80", borderColor: "#4ade8050" }}
                  >
                    {reviews[active].product}
                  </span>
                  <span className="text-[#4ade80]/50 text-xs font-pixel">{reviews[active].price}</span>
                </div>
                <Stars count={reviews[active].rating} />
                <p className="text-[#c8ffc8]/80 mt-3 leading-relaxed text-sm">{reviews[active].text}</p>
              </div>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-5 justify-center">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-sm transition-all duration-300"
                  style={{
                    width: i === active ? "24px" : "8px",
                    height: "8px",
                    background: "#4ade80",
                    opacity: i === active ? 1 : 0.25,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((rev, i) => (
            <div
              key={rev.nick}
              className="reveal skin-card border border-[#4ade80]/15 bg-[#0a140a] rounded-sm p-4 cursor-pointer hover:border-[#4ade80]/35 transition-colors"
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={() => setActive(i)}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-8 h-8 rounded-sm flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${rev.skin.head}, ${rev.skin.body})` }}
                />
                <div>
                  <div className="font-pixel text-white text-xs">{rev.nick}</div>
                  <Stars count={rev.rating} />
                </div>
                <div className="ml-auto text-[#4ade80] text-xs font-pixel opacity-60">{rev.price}</div>
              </div>
              <p className="text-[#c8ffc8]/50 text-xs leading-relaxed line-clamp-2">{rev.text}</p>
              <div className="mt-2">
                <span className="text-[#4ade80]/50 text-xs">{rev.product}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
